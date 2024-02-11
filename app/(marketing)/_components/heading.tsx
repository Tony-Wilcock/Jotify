"use client";

import { Button } from "@/components/ui/button";
import { AppName } from "@/public/constants";
import { ArrowRight } from "lucide-react";

type Props = {};

export const Heading = (props: Props) => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents & Plans, Unified. Welcome to{" "}
        <span className="underline">{AppName}!</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        {AppName} is the connected workspace where <br />
        work happens faster!
      </h3>
      <Button>
        Enter {AppName} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
