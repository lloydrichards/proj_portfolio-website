import { Mdx } from "@/components/Mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/format";
import { Lab, allLabs } from "contentlayer/generated";
import { FlaskConical, Github } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";

export interface LabPageProps {
  params: {
    slug: string;
  };
}

const getLabFromParams = async (slug: string) => {
  const lab = allLabs.find((lab) => lab.slugAsParams === slug);
  if (!lab) notFound();
  return lab;
};

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const lab = await getLabFromParams(params.slug);

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
          <FlaskConical className="fill-neutral" />
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
  const lab = await getLabFromParams(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center p-2 dark:prose-invert">
        <LabInfoCard lab={lab} />
        <Mdx code={lab.body.code} />
      </div>
    </main>
  );
};

export default LabPage;
