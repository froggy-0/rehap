"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/lib/content";
import { LogoMark } from "./LogoMark";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const config = getSiteConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "홈" },
    { id: "resources", label: "문제집" },
    { id: "about", label: "소개" },
    { id: "feedback", label: "문의" },
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 px-5 py-3 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <button 
          onClick={() => onTabChange("home")}
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
        >
          <LogoMark className="h-8 w-8 md:h-10 md:w-10" />
          <div className="text-left">
            <h1 className="text-base md:text-lg font-bold tracking-tight text-foreground">
              {config.brand.name}
            </h1>
            <p className="text-xs md:text-sm text-text-muted leading-[1.6]">
              {config.brand.tagline}
            </p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="min-h-[44px] font-semibold text-sm md:text-base px-3 md:px-4">
            <a
              href={config.applicationForm.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {config.applicationForm.buttonText}
            </a>
          </Button>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="min-h-[44px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b bg-background/98 backdrop-blur-md shadow-lg">
          <div className="mx-auto max-w-5xl px-5 py-4">
            <nav className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
