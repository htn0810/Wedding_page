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
              CÔ DÂU
            </h5>
          </Animate>
          <Animate animateType={fadeUpRight}>
            <div className="font-primary text-base md:text-xl lg:text-2xl 2xl:text-4xl text-center smmb-2 lg:mb-6 2xl:mb-8 ">
              Nguyễn Ngọc Vân
            </div>
          </Animate>
          <Animate animateType={fadeUpRight}>
            <p className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap ">
              Em - một cô gái đa sầu, đa cảm, thật may mắn khi gặp được anh. Cảm
              ơn anh luôn quan tâm, chăm sóc em thật nhiề, nuông chiều những khi
              em giận hờn vô cớ. Bắt đầu từ hôm nay chúng ta sẽ viết nên một
              chương mới của cuộc đời, bằng tình thương yêu và hạnh phúc đong
              đầy anh nhé!
            </p>
          </Animate>
        </div>
      </div>
      {/* Chú rể */}
      <div className="-mx-6 sm:-mx-0 grid grid-cols-5 gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-12 2xl:gap-x-20 mt-8 items-center sm:items-start pl-2">
        <div className="col-span-3 flex flex-col items-center justify-center h-full">
          <Animate animateType={fadeUpLeft}>
            <h5 className="text-sm md:text-lg lg:text-xl 2xl:text-3xl font-semibold text-center">
              CHÚ RỂ
            </h5>
          </Animate>
          <Animate animateType={fadeUpLeft}>
            <div className="font-primary text-base md:text-xl lg:text-2xl 2xl:text-4xl text-center smmb-2 lg:mb-6 2xl:mb-8">
              Cao Thành Trung
            </div>
          </Animate>
          <Animate animateType={fadeUpLeft}>
            <p className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap">
              Hạnh phúc nhất trên đời không phải là việc gặp được người tuyệt
              nhất ở những tháng ngày đẹp nhất. Mà là một người sẽ từ từ nhìn
              mình già đi, không cần ở những năm tháng đẹp nhất, mà là đúng
              người, đúng thời điểm, nắm tay nhau cùng đi. Anh rất hạnh phúc vì
              gặp được em, cùng anh về nhà em nhé!
            </p>
          </Animate>
        </div>
        <CustomImage img={IMAGES.Groom} className="col-span-2" />
      </div>
    </>
  );
};

export default Introduction;
