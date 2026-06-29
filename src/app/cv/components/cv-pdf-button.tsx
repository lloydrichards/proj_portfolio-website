import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atom/button";

export function CvPdfButton({ href }: { href: string }) {
  return (
    <Button
      className="print:hidden"
      render={<Link href={href} />}
      size="sm"
      variant="outline"
    >
      <Download data-icon="inline-start" />
      PDF
    </Button>
  );
}
