import { Badge } from "@/components/atom/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Lab } from "@/types/Lab";
import Link from "next/link";
import { Button } from "../atom/button";

interface IPostCard {
  lab: typeof Lab.Encoded;
  className?: string;
  asLink?: boolean;
}

export const LabCard: React.FC<IPostCard> = ({ lab, className, asLink }) => {
  const content = (
    <Card className="@container flex h-full flex-col">
      <CardHeader className="flex-1 gap-2 @max-[108px]:p-2">
        <div className="hidden gap-1 @min-sm:flex">
          {lab.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t.toUpperCase()}
            </Badge>
          ))}
          <p className="text-muted-foreground flex grow justify-end text-sm">
            {formatDate(new Date(lab.date))}
          </p>
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
