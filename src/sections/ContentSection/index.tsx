import { ContentCard } from "@/sections/ContentSection/components/ContentCard";
import { GamingCard } from "@/sections/ContentSection/components/GamingCard";
import { BackgroundElements } from "@/sections/ContentSection/components/BackgroundElements";

export const ContentSection = () => {
  return (
    <div className="box-border caret-transparent h-[2500px] overflow-hidden mt-[100px] md:h-[2300px]">
      <div className="relative box-border caret-transparent h-full">
        <h1 className="text-[40px] font-bold box-border caret-transparent leading-[60px] text-center w-[90%] mx-auto md:text-[100px] md:leading-[150px]">
          Something for everyone
        </h1>
        <ContentCard />
        <GamingCard />
        <BackgroundElements />
        <div className="absolute box-border caret-transparent h-px w-full bottom-10 md:bottom-[100px]"></div>
      </div>
    </div>
  );
};
