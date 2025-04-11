"use client";

import * as React from "react";
import Link from "next/link";
import { ImageGenLogo } from "../logos/image-gen-logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  isLink?: boolean;
  href?: string;
  content?: React.ReactNode;
  scrollTo?: string;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: React.ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Home",
      isLink: true,
      href: "/",
    },
    {
      title: "Features",
      scrollTo: "features-section",
    },
    {
      title: "Templates",
      scrollTo: "templates-section",
    },
    {
      title: "About",
      scrollTo: "about-section",
    },
  ],
  components = [
    {
      title: "Marketing Templates",
      href: "#marketing-templates",
      description: "Pre-designed templates for marketing campaigns",
    },
    {
      title: "Social Media",
      href: "#social-media",
      description: "Templates optimized for social platforms",
    },
  ],
  logo = <ImageGenLogo />,
  logoTitle = "Image Gen",
  logoDescription = "AI-powered image generation platform for all your creative needs.",
  logoHref = "/",
  introItems = [
    {
      title: "Getting Started",
      href: "#getting-started",
      description: "Learn how to quickly setup your account",
    },
  ],
}: NavigationProps) {
  const handleScrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState({}, "", `#${id}`);
      }
    }
  };

  return (
    <div className="w-full bg-black py-4">
      <NavigationMenu className="hidden md:flex mx-auto max-w-7xl">
        <NavigationMenuList>
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.isLink ? (
                <Link href={item.href || ""} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-white text-lg font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-900"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              ) : item.scrollTo ? (
                <button
                  onClick={() => handleScrollTo(item.scrollTo!)}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white text-lg font-semibold cursor-pointer bg-transparent transition-transform duration-300 hover:scale-110 hover:text-blue-900"
                  )}
                >
                  {item.title}
                </button>
              ) : (
                <>
                  <NavigationMenuTrigger
                    className="text-white text-lg font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-900"
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.content === "templates" ? (
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    ) : (
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                              href={logoHref}
                            >
                              {logo}
                              <div className="mt-4 mb-2 text-lg font-medium">
                                {logoTitle}
                              </div>
                              <p className="text-muted-foreground text-sm leading-tight">
                                {logoDescription}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {introItems.map((intro, i) => (
                          <ListItem
                            key={i}
                            href={intro.href}
                            title={intro.title}
                          >
                            {intro.description}
                          </ListItem>
                        ))}
                      </ul>
                    )}
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
