import { useEffect, useRef } from "react";

interface Props {
  source: string;
}

function Banner({ source }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current === null) return;
    imgRef.current.style.animationDuration = `${Math.floor(
      Math.random() * 300 + 200
    )}ms`;
  });
  return (
    <img
      src={source}
      alt="banner"
      className="w-80 h-20 animate-glimmer"
      ref={imgRef}
    />
  );
}

export default Banner;
