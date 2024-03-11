"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { AppName } from "@/public/constants";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {};

export const Heading = (props: Props) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

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
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter {AppName} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get {AppName} free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
