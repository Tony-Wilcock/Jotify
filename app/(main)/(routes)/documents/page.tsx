"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { AppName } from "@/public/constants";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.Create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create the note!",
    });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src={"/empty.png"}
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:hidden"
      />

      <Image
        src={"/empty-dark.png"}
        height={"300"}
        width={"300"}
        alt="empty"
        className="hidden dark:block"
      />

      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s {AppName}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
