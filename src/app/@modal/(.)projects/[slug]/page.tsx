import {
  ProjectPageProps,
  getProjectFromParams,
} from "@/app/projects/[slug]/page";
import { Mdx } from "@/components/Mdx";
import { Modal } from "@/components/layout/modal/Modal";
import Link from "next/link";

const ProjectModal = async ({ params }: ProjectPageProps) => {
  const project = await getProjectFromParams(params.slug);
  return (
    <Modal>
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <Link href={project.slug}>Full Screen</Link>
        <Mdx code={project.body.code} />
      </div>
    </Modal>
  );
};

export default ProjectModal;
