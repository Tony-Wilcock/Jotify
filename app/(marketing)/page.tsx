import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

type Props = {};

const MarketingPage = (props: Props) => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="px6 flex flex-1 flex-col items-center justify-center gap-y-8 pb-10 text-center  md:justify-start">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;