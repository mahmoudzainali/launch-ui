"use client";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function About({ id }: { id?: string }) {
  return (
    <Section id={id} className="bg-black">
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center text-white">
        <div className="flex flex-col items-center gap-6">
          <Badge
            variant="brand"
            className="animate-pulse"
            style={{
              background: "linear-gradient(135deg, #FF6FD8 0%, #3813C2 100%)",
              color: "white",
            }}
          >
            About Alrais Group
          </Badge>
          <h2 className="animate-appear relative z-10 text-4xl font-semibold leading-tight opacity-0 delay-150 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            <span className="text-white [text-shadow:_0_0_8px_#3b82f6,_0_0_12px_#3b82f6]">
              Our Mission and Vision
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Alrais Group is committed to delivering cutting-edge AI solutions
            that empower businesses and individuals to create stunning visual
            content with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-3 max-w-6xl">
          <AnimatedFrame 
            title="Innovation" 
            description="We push the boundaries of AI technology to deliver exceptional image generation capabilities."
          />
          <AnimatedFrame 
            title="Quality" 
            description="Our platform produces high-resolution, professional-grade images for all your needs."
          />
          <AnimatedFrame 
            title="Accessibility" 
            description="We believe powerful creative tools should be available to everyone, regardless of skill level."
          />
        </div>
      </div>
    </Section>
  );
}

function AnimatedFrame({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      frame.style.setProperty('--x', `${x}px`);
      frame.style.setProperty('--y', `${y}px`);
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
        "hover:before:opacity-100 hover:shadow-lg hover:-translate-y-1"
      )}
    >
      <div className="flex flex-col flex-grow justify-center items-center px-4 text-center">
        <h3 className="font-medium text-lg mb-4">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
}
