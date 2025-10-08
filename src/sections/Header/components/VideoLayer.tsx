export type VideoLayerProps = {
  alt: string;
  src: string;
  variant: string;
};

export const VideoLayer = (props: VideoLayerProps) => {
  return (
    <video
      aria-label={props.alt}
      className={`absolute box-border max-w-full ${props.variant}`}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
};









