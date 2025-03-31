import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { cn } from "@/lib/utils";
import { Occupation } from "@/types/Occupation";
import { utcFormat } from "d3";
import { FC } from "react";

interface OccupationCardProps {
  data: typeof Occupation.Encoded;
  className?: string;
}
export const OccupationCard: FC<OccupationCardProps> = ({
  data,
  className,
}) => {
  const formatDate = (date?: Date) => date && utcFormat("%b %Y")(date);
  return (
    <Card className={cn("group h-full group-focus-visible:ring-2", className)}>
      <CardHeader className="p-2">
        <CardTitle className="my-0 line-clamp-1">{data.title}</CardTitle>
        <p>{data.company}</p>
      </CardHeader>
      <CardContent className="grid px-2 group-hover:hidden">
        <p>Location: {data.location}</p>
        <p>
          {formatDate(new Date(data.start_date))}
          {" - "}
          {data.end_date ? formatDate(new Date(data.end_date)) : "Present"}
        </p>
        <p>Skills: {data.skills?.join(", ")}</p>
        <p>Attributes: {data.attributes?.join(", ")}</p>
      </CardContent>
      <CardContent className="hidden px-2 group-hover:flex">
        <CardDescription className="my-0 line-clamp-3">
          {data.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
