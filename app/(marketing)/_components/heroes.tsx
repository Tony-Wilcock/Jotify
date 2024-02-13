import Image from "next/image";

type Props = {};

export const Heroes = (props: Props) => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image src={"/pic1.png"} fill className="object-contain" alt="" />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image src={"/pic1.png"} fill className="object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};
