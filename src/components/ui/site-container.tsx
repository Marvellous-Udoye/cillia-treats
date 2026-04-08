import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type SiteContainerProps = HTMLAttributes<HTMLDivElement>;

export function SiteContainer({ className, ...props }: SiteContainerProps) {
  return <div className={cn("w-full px-[1.5vw]", className)} {...props} />;
}
