"use client";

import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language-provider";

export const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative border-t border-border/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-foreground md:text-6xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t.contact.nameLabel}</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder={t.contact.namePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t.contact.emailLabel}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.contact.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.messageLabel}</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-fit rounded-full px-8">
            {t.contact.submit}
          </Button>
        </form>
      </div>
    </section>
  );
};
