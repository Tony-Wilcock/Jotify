import { Logo } from "./logo";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="flex w-full items-center bg-background p-6">
      <Logo />
    </div>
  );
};
