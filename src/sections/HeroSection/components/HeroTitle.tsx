export type HeroTitleProps = {
  title: string;
  description?: string;
  variant: string;
};

export const HeroTitle = (props: HeroTitleProps) => {
  if (props.variant === "simple") {
    return (
      <p className="fixed text-xl font-[510] box-border caret-transparent leading-[29.83px] text-center w-full z-20 top-[7%] md:text-3xl md:leading-9 md:top-[2%]">
        {props.title}
      </p>
    );
  }

  return (
    <div className="fixed box-border caret-transparent flex-col text-center translate-x-[-50.0%] w-fit z-20 mt-[15%] mx-auto left-2/4 top-[5%] md:mt-[2%]">
      <h1 className="text-pink-300 text-[100px] font-bold box-border caret-transparent leading-[150px] md:text-[200px] md:leading-[300px]">
        {props.title}
      </h1>
      {props.description && (
        <p className="text-lg font-bold box-border caret-transparent leading-[23.87px] mt-[-5%] px-0 md:px-[10%]">
          {props.description}
        </p>
      )}
    </div>
  );
};
