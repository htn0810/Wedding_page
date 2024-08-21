import CustomImage from "@/components/CustomImage";
import { IMAGES } from "@/constant/images.constant";

const Thank = () => {
  return (
    <div className="relative h-[180px] md:h-[280px] lg:h-[350px] 2xl:h-[500px] mt-6 flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <CustomImage img={IMAGES.Thanku} className="h-full w-full" />
      </div>

      <h5 className="z-50 font-primary mt-2 text-center text-2xl lg:text-3xl 2xl:text-5xl">
        Thank you!
      </h5>
    </div>
  );
};

export default Thank;
