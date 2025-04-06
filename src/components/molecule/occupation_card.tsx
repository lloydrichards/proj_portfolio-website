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
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Waypoints,
} from "lucide-react";
import { FC } from "react";
import { Badge } from "../atom/badge";
import { Table, TableBody, TableCell, TableRow } from "../atom/table";

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
        <CardTitle className="my-0 mb-2 flex items-center gap-4">
          <OccupationIcon category={data.category} />
          {data.title}
        </CardTitle>
        <p>{data.company}</p>
        <p>
          {formatDate(new Date(data.start_date))}
          {" - "}
          {data.end_date ? formatDate(new Date(data.end_date)) : "Present"}
        </p>
      </CardHeader>
      <CardContent className="hidden px-2 group-hover:grid">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-32 font-medium">Location</TableCell>
              <TableCell>{data.location}</TableCell>
            </TableRow>
            {data.skills ? (
              <TableRow>
                <TableCell className="font-medium">Skills</TableCell>
                <TableCell>
                  {data.skills.map((a) => (
                    <Badge key={a} variant="outline">
                      {a}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            ) : null}
            {data.attributes ? (
              <TableRow>
                <TableCell className="font-medium">Attributes</TableCell>
                <TableCell>
                  {data.attributes.map((a) => (
                    <Badge key={a} variant="outline">
                      {a}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </CardContent>
      <CardContent className="grid px-2 group-hover:hidden">
        <CardDescription className="my-0 line-clamp-5 pt-0">
          {data.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const OccupationIcon: FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case "CONFERENCE":
      return <Waypoints />;
    case "EDUCATION":
      return <GraduationCap />;
    case "WORK":
      return <BriefcaseBusiness />;
    case "VOLUNTEER":
      return <HeartHandshake />;
    default:
      return <p>❓</p>;
  }
};
