import { TImage } from "@/types/commons.type";

type Props = {
  img: TImage;
  className?: string;
};

const CustomImage = (props: Props) => {
  const { img, className } = props;
  return (
    <img
      src={img.url}
      alt="Image"
      srcSet={`
        ${img.xs} 480w,
        ${img.md} 1279w,
        ${img.xl} 1280w
        `}
      sizes="
        (max-width: 480px) 100vw,
        (max-width: 1279px) 100vw,
        (min-width: 1280px) 100vw
        "
      className={className}
    />
  );
};

export default CustomImage;
