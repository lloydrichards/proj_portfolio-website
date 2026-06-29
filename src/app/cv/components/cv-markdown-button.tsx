import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atom/button";

export function CvMarkdownButton({ href }: { href: string }) {
  return (
    <Button
      className="print:hidden"
      render={<Link href={href} />}
      size="sm"
      variant="outline"
    >
      <FileText data-icon="inline-start" />
      Markdown
    </Button>
  );
}
