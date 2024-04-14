import Image from "next/image";
import { poppins } from "@/public/fonts";

import { cn } from "@/lib/utils";
import { AppName } from "@/public/constants";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={"/logo.png"} width={"40"} height={"40"} alt="Logo" />
      <p className={cn("select-none font-semibold", poppins.className)}>
        {AppName}
      </p>
    </div>
  );
};
