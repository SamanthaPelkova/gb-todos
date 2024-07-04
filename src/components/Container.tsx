import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[calc(1280px-2rem)] px-4 xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
