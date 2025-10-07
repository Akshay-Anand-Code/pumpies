import { TeamMember } from "@/sections/TeamSection/components/TeamMember";

export const TeamGrid = () => {
  return (
    <div className="box-border caret-transparent flex flex-col h-auto justify-around w-[70%] mt-[200px] mx-auto md:flex-row md:h-[600px] md:w-4/5">
      <TeamMember
        xUrl="https://x.com/itsjust__H"
        imageUrl="https://c.animaapp.com/mgg4tism1dKXdt/assets/35.png"
        name="H"
        role="Founder"
        imageVariant="text-transparent aspect-[auto_2000_/_2000]"
      />
      <TeamMember
        xUrl="https://x.com/N3lly_San"
        imageUrl="https://c.animaapp.com/mgg4tism1dKXdt/assets/33.png"
        name="Nelson"
        role="Head of Design"
        imageVariant="aspect-[auto_512_/_512]"
      />
    </div>
  );
};
