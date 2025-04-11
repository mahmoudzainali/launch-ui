"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "../../ui/button";
import { Section } from "../../ui/section";
import Glow from "../../ui/glow";
import { siteConfig } from "@/config/site";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  // badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
  glow?: boolean;
  centered?: boolean;
}

export default function Hero({
<<<<<<< Updated upstream
  title = "Give your big idea the design it deserves",
  description = "Professionally designed blocks and templates built with React, Shadcn/ui and Tailwind that will help your product stand out.",
  mockup = (
    <Screenshot
      srcLight="/app-light.png"
      srcDark="/app-dark.png"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        New version of Launch UI is out!
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Get started
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
=======
  title = "Bring Your Vision to Life with Alrais Group AI-Powered Image Generation",
  subtitle,
  description = "A next-gen platform by Alrais Group that empowers you to generate, edit, and enhance images with precision — powered by advanced AI.",
  // badge = false,
>>>>>>> Stashed changes
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
      className:
        "shadow-lg text-white bg-[linear-gradient(135deg,_#FF6FD8_0%,_#3813C2_100%)] hover:brightness-110 animate-pulse", 
    },
  ],
  className,
  glow = true,
  centered = true,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden pb-0 ", 
        centered && "text-center",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-16 md:gap-24">
        <div className={cn(
          "flex flex-col gap-6 sm:gap-8",
          centered && "items-center"
        )}>
          {subtitle && (
            <p className="text-lg font-medium text-brand animate-appear opacity-0 delay-75">
              {subtitle}
            </p>
          )}

          <h1 className="animate-appear relative z-10 text-4xl font-semibold leading-tight opacity-0 delay-150 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
            <span className="text-white [text-shadow:_0_0_8px_#3b82f6,_0_0_12px_#3b82f6]">
              {title}
            </span>
          </h1>

          <p className="animate-appear relative z-10 max-w-3xl text-pretty text-lg opacity-0 delay-300 sm:text-xl">
            {description}
          </p>

          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-wrap justify-center gap-3 opacity-0 delay-500 sm:gap-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  size="lg"
                  className={cn(
                    "transition-all hover:scale-[1.02] animate-rotateAnimation animate-moveX",
                    button.className
                  )}
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {glow && (
          <Glow
            variant="top"
            className="animate-appear-zoom opacity-0 delay-700"
          />
        )}
      </div>

      <style jsx>{`
        @keyframes moveX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(90%);
          }
        }

        @keyframes rotateAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(95.8828deg);
          }
        }

        .button2 {
          animation: rotateAnimation 5s linear infinite, moveX 5s ease-in-out infinite alternate;
          background: conic-gradient(from var(--r) at var(--x) 50%, #222 0, #00ffb1 20%, #1a1a1a 25%);
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-size: 16px;
          font-weight: 600;
          justify-content: center;
          line-height: 24px;
          padding: 12px 24px;
          position: relative;
          text-align: center;
        }

        button:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </Section>
  );
}
