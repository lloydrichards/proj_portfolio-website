"use client";

import { toast as sonnerToast } from "sonner";

type ToastPayload = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

function toast({ title, description, variant }: ToastPayload) {
  const message = title ?? "";
  if (variant === "destructive") {
    sonnerToast.error(message, { description });
    return;
  }

  sonnerToast(message, { description });
}

function useToast() {
  return { toast };
}

export { toast, useToast };
