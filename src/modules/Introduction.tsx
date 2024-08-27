import { IMAGES } from "@/constant/images.constant";
import Animate from "@/components/Animate";
import { fadeUpLeft, fadeUpRight } from "@/constant/animate.constant";
import CustomImage from "@/components/CustomImage";

const Introduction = () => {
  return (
    <>
      <h5 className="font-secondary lg:my-8 2xl:my-10 text-center text-sm lg:text-lg 2xl:text-xl">
        "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà
        hai người cùng nhau xây dựng và phát triển"
      </h5>
      {/* Cô dâu */}
      <div className="-mx-6 sm:-mx-0 grid grid-cols-5 gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-12 2xl:gap-x-20 mt-8 items-center sm:items-start pr-2">
        <CustomImage img={IMAGES.Bride} className="col-span-2" />
        <div className="col-span-3 flex flex-col items-center justify-center h-full">
          <Animate animateType={fadeUpRight}>
            <h5 className="text-sm md:text-lg lg:text-xl 2xl:text-3xl font-semibold text-center ">
              BRIDE
            </h5>
          </Animate>
          <Animate animateType={fadeUpRight}>
            <div className="font-primary text-base md:text-xl lg:text-2xl 2xl:text-4xl text-center smmb-2 lg:mb-6 2xl:mb-8 ">
              Doan Hai Anh
            </div>
          </Animate>
          <Animate animateType={fadeUpRight}>
            <p className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap ">
              Love isn't always perfect, and it doesn't always come easy. Love
              is overcoming obstacles, facing challengens, fighting to be
              together, holding on and never letting go. But most of all, every
              second was worth it because we did it together.
            </p>
          </Animate>
        </div>
      </div>
      {/* Chú rể */}
      <div className="-mx-6 sm:-mx-0 grid grid-cols-5 gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-12 2xl:gap-x-20 mt-8 items-center sm:items-start pl-2">
        <div className="col-span-3 flex flex-col items-center justify-center h-full">
          <Animate animateType={fadeUpLeft}>
            <h5 className="text-sm md:text-lg lg:text-xl 2xl:text-3xl font-semibold text-center">
              GROOM
            </h5>
          </Animate>
          <Animate animateType={fadeUpLeft}>
            <div className="font-primary text-base md:text-xl lg:text-2xl 2xl:text-4xl text-center smmb-2 lg:mb-6 2xl:mb-8">
              Nguyen Trung Kien
            </div>
          </Animate>
          <Animate animateType={fadeUpLeft}>
            <p className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap">
              A soulmate is someone who is willing to grow with you, who chooses
              to be with you until the end, and will love you through good and
              bad. At the end of all things, we'll see what really matters, and
              love knowing that what we are growing is beautiful.
            </p>
          </Animate>
        </div>
        <CustomImage img={IMAGES.Groom} className="col-span-2" />
      </div>
    </>
  );
};

export default Introduction;
