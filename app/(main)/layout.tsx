"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (!isAuthenticated) {
    return redirect("/");
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  return (
    <div className="flex h-full dark:bg-[#1f1f1f]">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto dark:bg-[#1f1f1f]">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
