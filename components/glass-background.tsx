"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Kotoba-style radial wash, tinted to bayside blue. */
const gradientLayers = (
  <>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(74,158,184,0.55),rgba(74,158,184,0.22)_26%,rgba(15,23,42,0.9)_58%,rgba(7,9,12,1)_85%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_100%,rgba(74,158,184,0.4),rgba(74,158,184,0.16)_28%,rgba(15,23,42,0.85)_60%,rgba(7,9,12,1)_90%)]" />
  </>
);

type GlassBackgroundShellProps = {
  children: ReactNode;
  className?: string;
};

export const GlassBackgroundShell = ({
  children,
  className,
}: GlassBackgroundShellProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen overflow-hidden bg-[#07090c]",
        className,
      )}
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        {gradientLayers}
      </div>
      {children}
    </div>
  );
};
