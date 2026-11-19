import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { ShoppingApp } from "./shopping-cart";

const root = document.getElementById("demo");
if (root)
  createRoot(root).render(
    <>
      <ShoppingApp />
      <Toaster theme="system" />
    </>,
  );
