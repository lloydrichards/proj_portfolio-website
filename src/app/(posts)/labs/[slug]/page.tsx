import { Mdx } from "@/components/Mdx";
import { formatDate } from "@/lib/format";
import { Lab, allLabs } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";
import { FiGithub } from "react-icons/fi";
import { ImLab } from "react-icons/im";

interface LabPageProps {
  params: {
    slug: string;
  };
}

async function getLabFromParams(slug: string) {
  const lab = allLabs.find((lab) => lab.slugAsParams === slug);

  if (!lab) notFound();

  return lab;
}

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
    <div className="not-prose card card-compact w-full border-2 border-base-200">
      <div className="card-body">
        <div className="card-actions justify-between">
          <div className="flex items-center gap-2 opacity-60">
            {lab.tags?.map((t) => (
              <div
                key={t}
                className="badge-outline badge border-neutral text-neutral"
              >
                {t.toUpperCase()}
              </div>
            ))}
          </div>
          <div className="">{formatDate(new Date(lab.date))}</div>
        </div>
        <h2 className="card-title mt-2">
          <ImLab className="fill-neutral" />
          {lab.title}
        </h2>
        <p>{lab.description}</p>
        <div className="card-actions justify-end">
          <a
            target="_blank"
            href={`https://github.com/lloydrichards/lloyd-portfolio/tree/master/src/content/${lab._raw.sourceFilePath}`}
            className="btn-ghost btn-sm btn gap-2"
          >
            <FiGithub /> Repo
          </a>
        </div>
      </div>
    </div>
  );
};

const LabPage = async ({ params }: LabPageProps) => {
  const lab = await getLabFromParams(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center py-4">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center p-2">
        <LabInfoCard lab={lab} />
        <Mdx code={lab.body.code} />
      </div>
    </main>
  );
};

export default LabPage;
