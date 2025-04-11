"use client"; // Mark this file as a client component

import { cn } from "@/lib/utils";
// import { siteConfig } from "@/config/site";
import { SocialIcon } from "react-social-icons"; // Ensure you have installed this dependency via npm

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-black text-white py-8 mt-16", className)}>  {/* Changed bg-gray-900 to bg-black */}
      <div className="max-w-container mx-auto flex flex-col gap-8 sm:gap-16 md:gap-24 px-4 sm:px-8 md:px-16">  {/* Added padding (gaps) for left and right */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:items-center">
  <div>
    <h2 className="text-3xl font-semibold">Alrais Group</h2>
    <p className="text-lg text-gray-400">
      Empowering AI-powered image generation and editing.
    </p>
  </div>
  <div className="flex gap-6 sm:gap-8 mt-4 sm:mt-0">
    <SocialIcon url="https://twitter.com" bgColor="transparent" fgColor="white" />
    <SocialIcon url="https://facebook.com" bgColor="transparent" fgColor="white" />
    <SocialIcon url="https://linkedin.com" bgColor="transparent" fgColor="white" />
    <SocialIcon url="https://github.com" bgColor="transparent" fgColor="white" />
  </div>
</div>

        </div>
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alrais Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
