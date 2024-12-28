import { Button } from "@/components/atom/button/button";
import { Toaster } from "@/components/atom/toast/toaster";
import { useToast } from "@/hooks/use-toast";
import * as TE from "fp-ts/TaskEither";
import * as A from "fp-ts/lib/Array";
import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import * as t from "io-ts";
import { failure } from "io-ts/PathReporter";
import {
  Book,
  Gift,
  Minus,
  Plus,
  Shirt,
  ShoppingBasket,
  Sofa,
  Trash,
} from "lucide-react";
import { FC, useEffect, useState } from "react";

/*
 * Infrastructure Layer
 */

const fetchProducts = (): TE.TaskEither<AppError, Product[]> =>
  pipe(
    TE.right(
      JSON.stringify([
        { id: 1, name: "Art of War", type: "BOOK" },
        { id: 2, name: "Sofa", type: "FURNITURE" },
        { id: 3, name: "Big Shirt", type: "CLOTH" },
        { id: 4, name: "Lost Japan", type: "BOOK" },
        { id: 5, name: "Underwear", type: "CLOTH" },
        { id: 6, name: "Table", type: "FURNITURE" },
      ]),
    ),
    TE.map((response) => JSON.parse(response)),
    TE.chainEitherK((json) =>
      // check that the data returned from the server is valid
      pipe(
        Products.decode(json),
        E.mapLeft(
          (errors): AppError => ({
            type: "ParseError",
            message: failure(errors).join("\n"),
          }),
        ),
      ),
    ),
  );

/*
 * Domain Layer
 */

const Product = t.type({
  id: t.number,
  name: t.string,
  type: t.union([
    t.literal("BOOK"),
    t.literal("FURNITURE"),
    t.literal("CLOTH"),
  ]),
});
type Product = t.TypeOf<typeof Product>;

const Products = t.array(Product);
type Products = t.TypeOf<typeof Products>;

const Cart = t.type({
  items: t.array(
    t.type({
      product: Product,
      quantity: t.number,
    }),
  ),
});
type Cart = t.TypeOf<typeof Cart>;

type NetworkError = {
  type: "NetworkError";
  message: string;
};

type ParseError = {
  type: "ParseError";
  message: string;
};

type ValidationError = {
  type: "ValidationError";
  message: string;
};

type AppError = NetworkError | ParseError | ValidationError;

/*
 * Application Layer
 */

const getProductList = (): TE.TaskEither<AppError, Product[]> =>
  pipe(fetchProducts());

const addProductToCart =
  (product: Product, amount: number) =>
  (cart: Cart): E.Either<AppError, Cart> =>
    pipe(
      cart,
      E.fromPredicate(
        (cart) =>
          pipe(
            cart.items,
            A.findFirst((item) => item.product.id === product.id),
            O.fold(
              () => amount >= 0,
              (item) => item.quantity + amount >= 0,
            ),
          ),
        (): AppError => ({
          type: "ValidationError",
          message: "Can't remove that many items from the cart",
        }),
      ),
      E.map((cart) => ({
        ...cart,
        items: pipe(
          cart.items,
          A.filter((item) => item.product.id !== product.id),
          A.append({
            product,
            quantity: pipe(
              cart.items,
              A.findFirst((item) => item.product.id === product.id),
              O.fold(
                () => amount,
                (item) => item.quantity + amount,
              ),
            ),
          }),
        ),
      })),
      E.map((cart) => ({
        ...cart,
        items: pipe(
          cart.items,
          A.filter((item) => item.quantity > 0),
        ),
      })),
    );

const updateCart =
  (product: Product, amount: number) =>
  (cart: Cart): E.Either<AppError, Cart> =>
    pipe(
      cart,
      E.fromPredicate(
        (cart) =>
          cart.items.reduce((acc, cur) => acc + cur.quantity, amount) <= 10,
        (): AppError => ({
          type: "ValidationError",
          message: "Cart is full",
        }),
      ),
      E.chain((cart) => pipe(cart, addProductToCart(product, amount))),
    );

const useShoppingCart = () => {
  const [products, setProducts] = useState<O.Option<Product[]>>(O.none);
  const [error, setError] = useState<O.Option<AppError>>(O.none);
  const [cart, setCart] = useState<Cart>({ items: [] });

  useEffect(() => {
    pipe(getProductList())().then((s) =>
      pipe(
        s,
        E.fold(
          (error) => setError(O.some(error)),
          (products) => setProducts(O.some(products)),
        ),
      ),
    );
  }, []);

  const addItem = (product: Product, amount: number | undefined = 1) =>
    pipe(
      cart,
      updateCart(product, amount),
      E.foldW(
        (error) => setError(O.some(error)),
        (cart) => setCart(cart),
      ),
    );

  const removeItem = (product: Product, amount: number | undefined = 1) =>
    pipe(
      cart,
      updateCart(product, -amount),
      E.fold(
        (error) => setError(O.some(error)),
        (cart) => setCart(cart),
      ),
    );

  return { products, cart, addItem, removeItem, error };
};
/*
 * Presentation Layer
 */

const ErrorCard: FC<{ type: string }> = ({ type }) => {
  return (
    <div className="border-destructive grid items-center justify-center rounded border-2 p-4 shadow-md">
      <p>Oh no! Something went wrong 😭 ({type})</p>
    </div>
  );
};

const LoadingCard: FC = () => {
  return (
    <div className="bg-background grid items-center justify-center rounded border p-4 shadow-md">
      <p>Loading...</p>
    </div>
  );
};

const ShopCard: FC<{
  products: Product[];
  cart: Cart;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
}> = ({ products, addItem, cart, removeItem }) => {
  return (
    <div className="not-prose bg-background dark:prose-invert grid grid-cols-5 rounded border p-4 shadow-md">
      <section className="col-span-3 w-full border-r">
        <h1 className="flex gap-2">
          <Gift />
          Products
        </h1>
        <div className="flex w-full flex-wrap gap-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addItem}
              onRemove={removeItem}
            />
          ))}
        </div>
      </section>
      <aside className="col-span-2 w-full flex-col border p-2">
        <h2 className="flex gap-2">
          <ShoppingBasket />
          Cart
        </h2>
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.product.id} item={item} onDelete={removeItem} />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export const ShoppingApp: FC = () => {
  const { toast } = useToast();
  const { products, error, addItem, cart, removeItem } = useShoppingCart();
  useEffect(() => {
    pipe(
      error,
      O.foldW(
        () => {},
        (error) =>
          toast({
            variant: "destructive",
            title: error.type,
            description: error.message,
          }),
      ),
    );
  }, [error, toast]);

  return (
    <main>
      {pipe(
        products,
        O.fold(
          () =>
            pipe(
              error,
              O.fold(
                () => <LoadingCard />,
                (error) => <ErrorCard type={error.type} />,
              ),
            ),
          (data) => (
            <ShopCard
              products={data}
              cart={cart}
              addItem={addItem}
              removeItem={removeItem}
            />
          ),
        ),
      )}
      <Toaster />
    </main>
  );
};
const ProductCard: FC<{
  product: Product;
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
}> = ({ product, onAdd, onRemove }) => {
  const Icon = () => {
    switch (product.type) {
      case "BOOK":
        return <Book size={40} className="text-foreground/80" />;
      case "FURNITURE":
        return <Sofa size={40} className="text-foreground/80" />;
      case "CLOTH":
        return <Shirt size={40} className="text-foreground/80" />;
    }
  };

  return (
    <div className="flex h-32 w-40 gap-2 rounded-md border px-2 py-4 shadow-md">
      <div className="flex w-full flex-col justify-center">
        <p className="w-full text-ellipsis">{product.name}</p>
        <Icon />
      </div>
      <div className="flex flex-col justify-between">
        <Button variant="ghost" size="sm" onClick={() => onAdd(product)}>
          <Plus />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onRemove(product)}>
          <Minus />
        </Button>
      </div>
    </div>
  );
};

const CartItem: FC<{
  item: Cart["items"][0];
  onDelete: (product: Product, amount: number) => void;
}> = ({ item, onDelete }) => {
  return (
    <li key={item.product.id} className="bg-background flex items-center gap-1">
      <p className="w-full">
        {item.product.name} x {item.quantity}
      </p>
      <Button
        variant="ghost"
        onClick={() => onDelete(item.product, item.quantity)}
      >
        <Trash />
      </Button>
    </li>
  );
};
