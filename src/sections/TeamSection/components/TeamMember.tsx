export type TeamMemberProps = {
  xUrl: string;
  imageUrl: string;
  name: string;
  role: string;
  imageVariant: string;
};

export const TeamMember = (props: TeamMemberProps) => {
  return (
    <div className="relative box-border caret-transparent h-[450px] w-auto md:h-full md:w-[35%]">
      <a
        href={props.xUrl}
        className="absolute text-yellow-200 font-[510] bottom-[-35px] box-border caret-transparent block mt-5"
      >
        View X
      </a>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] top-0"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-0"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 top-[33.3333%]"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 top-[33.3333%]"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-0 bottom-0"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] left-[33.3333%] bottom-0"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2] right-0 bottom-0"></div>
      <div className="absolute box-border caret-transparent h-[33.3333%] w-[33.3333%] z-[2]"></div>
      <div className="absolute bg-[url('https://source.unsplash.com/300x300?cat')] bg-no-repeat bg-cover shadow-[rgba(0,0,0,0.3)_0px_0px_50px_0px] box-border caret-transparent bg-center inset-0">
        <img
          alt="Team Member H"
          src={props.imageUrl}
          className={`text-transparent box-border h-full max-w-full object-cover w-full ${props.imageVariant}`}
        />
        <p className="absolute text-[39px] font-[510] box-border caret-transparent leading-[58.5px] left-[5%] top-[2%]">
          {props.name}
        </p>
        <p className="absolute font-[510] box-border caret-transparent left-[5%] top-[15%]">
          {props.role}
        </p>
      </div>
    </div>
  );
};
