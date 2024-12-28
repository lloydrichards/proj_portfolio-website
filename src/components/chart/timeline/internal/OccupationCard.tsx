import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atom/card/card";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { utcFormat } from "d3";
import { OccupationMeta } from "@/types/domain";

interface OccupationCardProps {
  data: OccupationMeta;
  className?: string;
}
export const OccupationCard: FC<OccupationCardProps> = ({
  data,
  className,
}) => {
  const formatDate = (date?: Date) => date && utcFormat("%B %Y")(date);
  return (
    <Card
      className={cn("h-full border-none bg-transparent shadow-none", className)}
    >
      <CardHeader className="p-2">
        <CardTitle className="my-0 line-clamp-1">{data.title}</CardTitle>
        <CardDescription className="text-sm">{data.company}</CardDescription>
        <CardDescription className="text-sm">
          {formatDate(data.start_date)} -{" "}
          {formatDate(data.end_date) || "Present"}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <CardDescription className="my-0 line-clamp-3">
          {data.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
