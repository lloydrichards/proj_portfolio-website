import { MdxContent } from "@/components/molecule/mdx_content/mdx_content";
import { Badge } from "@/components/atom/badge/badge";
import { Button } from "@/components/atom/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card/card";
import { formatDate } from "@/lib/format";
import { Lab } from "@generated";
import { FlaskConical, Github } from "lucide-react";
import { Metadata } from "next";
import { FC } from "react";
import { getLab } from "@/service/get-lab";
import { getAllLabs } from "@/service/get-all-lab";

export interface LabPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const lab = await getLab(params.slug);

  return {
    title: lab.title,
    description: lab.description,
    openGraph: {
      title: lab.title,
      description: lab.description,
      type: "article",
    },
  };
}

export async function generateStaticParams(): Promise<
  LabPageProps["params"][]
> {
  const allLabs = await getAllLabs();
  return allLabs.map((lab) => ({
    slug: lab.slugAsParams,
  }));
}
interface LabInfoCardProps {
  lab: Lab;
}

const LabInfoCard: FC<LabInfoCardProps> = ({ lab }) => {
  return (
    <Card className="not-prose w-full dark:prose-invert">
      <CardHeader className="flex-row justify-between pb-1">
        <div className="flex items-center gap-2 opacity-60">
          {lab.tags?.map((t) => (
            <Badge key={t} variant="outline">
              {t.toUpperCase()}
            </Badge>
          ))}
        </div>
        <CardDescription>{formatDate(new Date(lab.date))}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="flex gap-2">
          <FlaskConical className="text-muted-foreground" />
          {lab.title}
        </CardTitle>
        <CardDescription>{lab.description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" asChild>
          <a
            target="_blank"
            href={`https://github.com/lloydrichards/lloyd-portfolio/tree/master/src/content/${lab._raw.sourceFilePath}`}
            className="flex gap-2 no-underline"
          >
            <Github /> Source
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const LabPage = async ({ params }: LabPageProps) => {
  const lab = await getLab(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center p-2 dark:prose-invert">
        <LabInfoCard lab={lab} />
        <MdxContent code={lab.body.code} />
      </div>
    </main>
  );
};

export default LabPage;
