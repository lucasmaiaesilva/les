"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@repo/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicos", label: t("nav.services") },
    { href: "#sobre", label: t("nav.about") },
    { href: "#contato", label: t("nav.contact") },
  ];

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <Logo height={60} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="gap-2">
                  <Globe size={18} />
                  <span className="text-sm uppercase">{locale}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLocale("pt")}>
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLocale("en")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="gradient-primary font-semibold" asChild>
              <a href="#contato">{t("cta")}</a>
            </Button>
          </div>

          <Button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="gap-2">
                      <Globe size={18} />
                      <span className="text-sm uppercase px-4">{locale}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => switchLocale("pt")}>
                      Português
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => switchLocale("en")}>
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="gradient-primary font-semibold flex-1" asChild>
                  <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                    {t("cta")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
