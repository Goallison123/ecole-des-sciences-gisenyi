import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground shadow-none",
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

export { Input };
