export const MobileMenu = () => {
  return (
    <div className="fixed box-border caret-transparent h-8 w-8 z-30 overflow-hidden left-auto right-[5%] top-[7%] md:left-[2%] md:top-[2%]">
      <button className="absolute bg-transparent caret-transparent block h-8 text-center w-8 z-30 p-0 left-0 top-0">
        <div className="items-end box-border caret-transparent flex flex-col h-3/6 justify-between w-full">
          <div className="bg-black box-border caret-transparent h-1/5 w-full rounded-lg"></div>
          <div className="bg-black box-border caret-transparent h-1/5 w-3/5 rounded-lg"></div>
        </div>
      </button>
      <button className="absolute bg-transparent caret-transparent block h-8 text-center translate-y-10 w-8 z-30 p-0 left-0 top-0">
        <img
          src="https://c.animaapp.com/mgg4tism1dKXdt/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent"
        />
      </button>
    </div>
  );
};
