"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeTab } from "@/components/tabs/HomeTab";
import { ResourcesTab } from "@/components/tabs/ResourcesTab";
import { BrandTab } from "@/components/tabs/BrandTab";
import { FeedbackTab } from "@/components/tabs/FeedbackTab";

const TAB_TRIGGER_CLASS =
  "min-h-[44px] rounded-full border border-transparent px-5 text-[15px] font-medium tracking-[-0.01em] text-slate-600 transition-all duration-200 data-[state=active]:border-emerald-500/20 data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm hover:text-slate-900 hover:bg-white/50";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const navigateToResources = () => {
    setActiveTab("resources");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <main className="flex-1">
          <TabsContent value="home" className="mt-0">
            <HomeTab onNavigateToResources={navigateToResources} />
          </TabsContent>
          <TabsContent value="resources" className="mt-0">
            <ResourcesTab />
          </TabsContent>
          <TabsContent value="about" className="mt-0">
            <BrandTab />
          </TabsContent>
          <TabsContent value="feedback" className="mt-0">
            <FeedbackTab />
          </TabsContent>
        </main>
      </Tabs>
      <Footer />
    </div>
  );
}
