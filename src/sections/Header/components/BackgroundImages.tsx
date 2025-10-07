export type BackgroundImagesProps = {
  alt: string;
  src: string;
  variant: string;
};

export const BackgroundImages = (props: BackgroundImagesProps) => {
  return (
    <img
      alt={props.alt}
      src={props.src}
      className={`absolute text-transparent box-border max-w-full ${props.variant}`}
    />
  );
};
