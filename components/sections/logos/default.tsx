"use client";

import { Section } from "../../ui/section";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Image, Upload, LayoutTemplate, Merge, Sparkles, ScanText, Download } from "lucide-react";
import { useEffect, useRef} from "react";

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  badge?: ReactNode | false;
  frames?: ReactNode[];
  className?: string;
  id?: string;
}

interface FeatureFrameProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "highlight";
}

function FeatureFrame({
  title,
  description,
  icon,
  className,
  variant = "default",
}: FeatureFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      frame.style.setProperty("--x", `${x}px`);
      frame.style.setProperty("--y", `${y}px`);
    };

    frame.addEventListener("mousemove", handleMouseMove);
    return () => frame.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "p-6 rounded-xl border border-gray-800 bg-black relative overflow-hidden",
        "flex flex-col h-[250px] w-full group transition-all duration-300",
        "before:content-[''] before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
        "before:bg-[radial-gradient(circle_at_var(--x,_100px)_var(--y,_100px),rgba(59,130,246,0.4)_0%,transparent_70%)]",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100 hover:shadow-lg hover:-translate-y-1",
        variant === "highlight" && "border-brand/30 bg-brand/5",
        className
      )}
    >
      {icon && (
        <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-brand/10 p-3 text-brand mx-auto transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <div className="flex flex-col flex-grow justify-center items-center px-4 text-center">
        <h3 className="font-medium text-lg line-clamp-2 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-4">{description}</p>
      </div>
    </div>
  );
}

const DEFAULT_FRAMES = [
  {
    title: "AI-Powered Background Remover",
    description: "Harness advanced vision models to cleanly isolate your product.",
    icon: <Image className="w-10 h-10" />,
  },
  {
    title: "AI Resolution Booster",
    description: "Elevate image quality using intelligent upscaling.",
    icon: <Sparkles className="w-10 h-10" />,
  },
  {
    title: "One-Tap Export Suite",
    description: "Download final creatives in high-quality formats.",
    icon: <Download className="w-10 h-10" />,
  },
  {
    title: "Curated Scene Templates",
    description: "Access professionally designed backgrounds.",
    icon: <LayoutTemplate className="w-10 h-10" />,
  },
  {
    title: "Instant Scene Fusion",
    description: "Generate photorealistic product scenes.",
    icon: <Merge className="w-10 h-10" />,
  },
  {
    title: "Autogenic AI Product Visualizer",
    description: "Reimagine product presentation with AI.",
    icon: <Sparkles className="w-10 h-10" />,
  },
  {
    title: "Text-to-Scene Generator",
    description: "Describe your vision with simple words.",
    icon: <ScanText className="w-10 h-10" />,
  },
  {
    title: "Smart Upload Engine",
    description: "Effortlessly upload product images.",
    icon: <Upload className="w-10 h-10" />,
  },
];

export default function Features({
  title = "Features",
  subtitle = "Alrais Image Generation Software is a Great Innovation to Help Marketing Team to Design an Attractive Images.",
  frames,
  className,
  id = "features-section",
}: FeaturesProps) {
  const displayedFrames =
    frames ??
    DEFAULT_FRAMES.map((frame, index) => (
      <FeatureFrame
        key={`feature-${index}`}
        title={frame.title}
        description={frame.description}
        icon={frame.icon}
      />
    ));

  const firstFourFeatures = displayedFrames.slice(0, 4);
  const secondFourFeatures = displayedFrames.slice(4, 8);

  return (
    <Section id={id} className={cn("scroll-mt-20 bg-black px-0 py-0", className)}>
      <div className="w-full mx-auto flex flex-col items-center gap-8 text-center text-white px-4 py-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <h1 className="animate-appear relative z-10 text-4xl font-semibold leading-tight opacity-0 delay-150 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            <span className="text-white [text-shadow:_0_0_8px_#3b82f6,_0_0_12px_#3b82f6]">
              {title}
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">{subtitle}</p>
        </div>

        {firstFourFeatures.length > 0 && (
          <div className="w-full px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {firstFourFeatures}
            </div>
          </div>
        )}

        {secondFourFeatures.length > 0 && (
          <div className="w-full px-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {secondFourFeatures}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
