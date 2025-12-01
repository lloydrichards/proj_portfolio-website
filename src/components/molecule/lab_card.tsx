import { cva } from "class-variance-authority";
import Link from "next/link";
import { Badge } from "@/components/atom/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { cn } from "@/lib/utils";
import type { Lab } from "@/types/Lab";
import { Button } from "../atom/button";

type LabCardProps = {
  lab: typeof Lab.Encoded;
  className?: string;
  asLink?: boolean;
};

const cardVariant = cva("@container flex h-full flex-col", {
  variants: {
    status: {
      draft: "border-yellow-500 border-2",
      unpublished: "border-orange-500 border-2",
      published: "",
    },
  },
  defaultVariants: {
    status: "published",
  },
});

export const LabCard: React.FC<LabCardProps> = ({ lab, className, asLink }) => {
  const isDev = process.env.NODE_ENV === "development";

  const content = (
    <Card
      className={cardVariant({
        className,
        status: isDev ? lab.status : "published",
      })}
    >
      <CardHeader className="flex-1 gap-2 @max-[108px]:p-2">
        <div className="hidden flex-wrap gap-1 opacity-60 @min-sm:flex">
          {lab.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t.toUpperCase()}
            </Badge>
          ))}
        </div>
        <CardTitle className="line-clamp-2">{lab.title}</CardTitle>
      </CardHeader>
      <CardContent className="hidden @min-[108px]:flex">
        <CardDescription className="line-clamp-3">
          {lab.description}
        </CardDescription>
      </CardContent>
      {asLink ? null : (
        <CardFooter className="z-10 justify-end gap-1">
          <Button variant="link" size="sm" asChild>
            <Link href={lab.pathname}>Read More</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
  return asLink ? (
    <Link
      href={lab.pathname}
      className={cn("rounded-sm no-underline shadow-md", className)}
      prefetch={false}
    >
      {content}
    </Link>
  ) : (
    content
  );
};
