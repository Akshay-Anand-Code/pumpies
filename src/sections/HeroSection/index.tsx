import { HeroTitle } from "@/sections/HeroSection/components/HeroTitle";

export const HeroSection = () => {
  return (
    <div className="relative box-border caret-transparent h-[1100px] w-full z-0">
      <img
        alt="Hero Sky Background"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/54.png"
        className="text-transparent aspect-[auto_1920_/_1239] box-border h-full max-w-full object-cover w-full z-[-1]"
      />
      <HeroTitle title="PUMPIES" variant="simple" />
      <HeroTitle
        title="PUMPIES"
        description="PUMPIES is a collection of digital doggos on Solana with a mission to spread good vibes across the globe."
        variant="other"
      />
    </div>
  );
};
