"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { ImageIcon, X } from "lucide-react";
import { UseCoverImage } from "@/hooks/use-cover-image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverProps) => {
  const params = useParams();
  const coverImage = UseCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = () => {
    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "group relative h-[35vh] w-full",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}

      {url && !preview && (
        <div className="absolute bottom-5 right-5 flex  items-center gap-x-2 opacity-0 group-hover:opacity-100">
          <Button
            onClick={coverImage.onOpen}
            className="text-xs text-muted-foreground"
            variant={"outline"}
            size={"sm"}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Change Image
          </Button>
          <Button
            onClick={onRemove}
            className="text-xs text-muted-foreground"
            variant={"outline"}
            size={"sm"}
          >
            <X className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};