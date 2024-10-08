import CustomImage from "@/components/CustomImage";
import { IMAGES } from "@/constant/images.constant";

const Thumbnail = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <CustomImage
        img={IMAGES.Thumbnail}
        className="w-full h-[80lvh] sm:h-full object-cover"
      />
      <div className="absolute w-full top-[30%] sm:top-[25%] 2xl:top-[20%] left-1/2 -translate-x-1/2 text-white">
        <h1 className="[text-shadow:_1px_2px_1px_rgb(0_0_0_/_40%)] text-white text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-primary text-center animate-jump-in animate-delay-200 animate-duration-1000">
          Trung Kien - Hai Anh
        </h1>
        <div className="[text-shadow:_1px_2px_1px_rgb(0_0_0_/_40%)] text-sm lg:text-lg 2xl:text-xl font-secondary font-light text-center mt-1 md:mt-4 animate-delay-300 animate-fade-down animate-duration-[1300ms]">
          SAVE OUR DATE
        </div>
        <p className="[text-shadow:_1px_2px_1px_rgb(0_0_0_/_40%)] text-sm lg:text-lg 2xl:text-xl font-secondary font-light text-center mt-1 md:mt-2 animate-delay-300 animate-fade-down animate-duration-[1300ms]">
          14.09.2024
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
