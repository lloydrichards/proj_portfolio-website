"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export interface IModal {
  children: React.ReactNode | React.ReactNode[];
}

export const Modal: React.FC<IModal> = ({ children }) => {
  const router = useRouter();
  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="max-h-screen overflow-scroll">
        {children}
      </DialogContent>
    </Dialog>
  );
};
