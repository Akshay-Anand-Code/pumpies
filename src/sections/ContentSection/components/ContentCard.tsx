import { ContentInfo } from "@/sections/ContentSection/components/ContentInfo";

export const ContentCard = () => {
  return (
    <div className="absolute box-border caret-transparent h-[850px] w-fit mt-[50px] mx-0 pb-5 bottom-[150px] md:h-[700px] md:mx-[15%] md:bottom-[350px]">
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
        <ContentInfo />
        <img
          alt="Gaming Card Background"
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/73.gif"
          className="text-transparent self-auto aspect-[auto_1350_/_1080] box-border h-fit mb-[-10%] max-w-full w-[45%] mx-auto md:self-center md:w-[30%] md:mr-[5%] md:mb-0"
        />
      </div>
      <h1 className="absolute text-2xl font-bold box-border caret-transparent leading-9 left-[2%] bottom-[7%] md:text-[34px] md:leading-[51px]">
        02
      </h1>
    </div>
  );
};
