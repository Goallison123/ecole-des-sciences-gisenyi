import {
  BookOpen,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Sprout,
  Star,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const map = {
  graduation: GraduationCap,
  users: Users,
  lightbulb: Lightbulb,
  leaf: Sprout,
  sprout: Sprout,
  book: BookOpen,
  flask: FlaskConical,
  file: ClipboardList,
  star: Star,
} as const;

export type IconName = keyof typeof map;

export function CircleIcon({
  name,
  className,
  iconClassName,
}: {
  name: IconName;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = map[name];
  return (
    <span
      className={cn(
        "inline-flex h-24 w-24 items-center justify-center rounded-pill bg-mint text-accent",
        className,
      )}
    >
      <Icon className={cn("h-8 w-8", iconClassName)} strokeWidth={1.5} />
    </span>
  );
}
