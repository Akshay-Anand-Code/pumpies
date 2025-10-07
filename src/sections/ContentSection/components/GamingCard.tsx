import { GamingInfo } from "@/sections/ContentSection/components/GamingInfo";

export const GamingCard = () => {
  return (
    <div className="relative box-border caret-transparent w-full mt-[50px] mx-auto md:w-[70%]">
      <div className="relative box-border caret-transparent h-[850px] w-full pb-5 md:h-[700px]">
        <img
          alt="Gaming Card Background"
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/31.png"
          className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
        />
        <img
          alt="Gaming Card Background"
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/62.png"
          className="absolute text-transparent aspect-[auto_1043_/_636] box-border h-full max-w-full object-cover w-full top-0 md:object-fill"
        />
        <div className="relative box-border caret-transparent gap-x-[normal] flex flex-col h-full gap-y-[normal] w-full overflow-hidden mb-[5.5%] top-0 md:gap-x-[5%] md:flex-row md:gap-y-[5%]">
          <GamingInfo />
          <img
            alt="Gaming Card Background"
            src="https://c.animaapp.com/mgg4tism1dKXdt/assets/85.gif"
            className="text-transparent self-auto aspect-[auto_1080_/_1920] box-border h-fit mb-[-10%] max-w-full w-[45%] mx-auto md:self-center md:w-[30%] md:mr-[5%] md:mb-0"
          />
        </div>
        <h1 className="absolute text-2xl font-bold box-border caret-transparent leading-9 left-[2%] bottom-[7%] md:text-[34px] md:leading-[51px]">
          01
        </h1>
      </div>
      <div className="absolute box-border caret-transparent h-px w-full top-[70px]"></div>
    </div>
  );
};
