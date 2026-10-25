"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LanguagePicker } from "@/components/language-picker";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export const SiteNav = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/20 bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl tracking-wide text-foreground transition-colors hover:text-bayside"
        >
          {t.nav.brand}
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {(
                [
                  ["#work", t.nav.work],
                  ["#contact", t.nav.contact],
                  ["#blogs", t.nav.blogs],
                ] as const
              ).map(([href, label]) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground",
                      )}
                    >
                      {label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <LanguagePicker />
        </div>
      </div>
    </header>
  );
};
