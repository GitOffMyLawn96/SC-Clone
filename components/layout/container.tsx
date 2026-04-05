import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-6 md:px-8", className)}>
      {children}
    </Component>
  );
}
