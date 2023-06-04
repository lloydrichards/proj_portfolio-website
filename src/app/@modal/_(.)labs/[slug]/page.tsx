import { LabPageProps, getLabFromParams } from "@/app/(posts)/labs/[slug]/page";
import { Mdx } from "@/components/Mdx";
import { Modal } from "@/components/layout/modal/Modal";
import Link from "next/link";

const LabModal = async ({ params }: LabPageProps) => {
  const lab = await getLabFromParams(params.slug);
  return (
    <Modal>
      <div className="prose mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{lab.title}</h1>
        <Link href={lab.slug}>Full Screen</Link>
        <Mdx code={lab.body.code} />
      </div>
    </Modal>
  );
};

export default LabModal;
