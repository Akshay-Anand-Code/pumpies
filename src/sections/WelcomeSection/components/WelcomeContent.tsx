import { WelcomeImages } from "@/sections/WelcomeSection/components/WelcomeImages";

export const WelcomeContent = () => {
  return (
    <div className="relative box-border caret-transparent w-full mt-[150px]">
      <h1 className="text-[39px] font-bold box-border caret-transparent leading-[58.5px] text-center w-[90%] mx-auto pt-[100px] md:text-[100px] md:leading-[150px]">
        Welcome to PUMPIES
      </h1>
      <h2 className="text-lg font-bold box-border caret-transparent leading-[23px] opacity-[0.76] text-center w-[90%] z-[1000] mt-[2%] mx-auto md:text-xl md:leading-7 md:w-6/12">
        We strive to provide something for everyone. The PUMPIES brand produces
        content, clothing, online games and toys. So, whatever it is you’re
        looking for, we hope you can find it here with the PUMPIES family.
      </h2>
      <img
        alt="welcome section upper clouds"
        src="https://c.animaapp.com/mgg4tism1dKXdt/assets/44.png"
        className="text-transparent aspect-[auto_1920_/_463] box-border max-w-full min-h-[200px] min-w-[900px] w-full bottom-[200px]"
      />
      <WelcomeImages />
    </div>
  );
};
