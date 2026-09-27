import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground",
        "placeholder:text-muted",
        "transition-[border-color,box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
