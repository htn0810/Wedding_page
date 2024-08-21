import "@/index.css";
import { useEffect, useState } from "react";
import Intro from "@/modules/Intro";
import { IMAGES } from "@/constant/images.constant";
import Thumbnail from "@/modules/Thumbnail";
import Introduction from "@/modules/Introduction";
import Invitation from "@/modules/Invitation";
import Event from "@/modules/Event";
import Dresscode from "@/modules/Dresscode";
import Album from "@/modules/Album";
import Thank from "@/modules/Thank";
import Note from "@/modules/Note";
import useViewport from "@/custom-hooks/useViewPort";
import { ViewPort } from "@/types/commons.type";

function App() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const viewPort: ViewPort = useViewport();

  useEffect(() => {
    const loadImage = (imageUrl: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        console.log(imageUrl);
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(imageUrl);
          }, 4000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      Object.entries(IMAGES).map(([_key, image]) =>
        loadImage(
          viewPort === "xs" ? image.xs : viewPort === "md" ? image.md : image.xl
        )
      )
    )
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <div className="overflow-hidden">
      {!imgsLoaded && <Intro />}
      <div className={`bg-gray-200 ${!imgsLoaded ? "hidden" : "block"}`}>
        {/* Thumbnail */}
        <Thumbnail />
        <div className="px-6 md:px-20 lg:px-40 2xl:px-60 py-5">
          <Introduction />
        </div>
        {/* Divider */}
        <div className="w-full my-4 lg:my-6 2xl:my-10 flex justify-center">
          <div className="h-[3px] w-1/4 md:w-1/12 bg-black"></div>
        </div>
        {/* Thân mời */}
        <Invitation />
        {/* Sự Kiện Quan Trọng */}
        <Event />
        {/* DressCode */}
        <div className="px-6 md:px-20 lg:px-40 2xl:px-60 py-5">
          <Dresscode />
          <Album />
        </div>
        {/* Album */}
        {/* Sổ lưu bút */}
        <Note />
        {/* Thank you */}
        <Thank />
      </div>
    </div>
  );
}

export default App;
