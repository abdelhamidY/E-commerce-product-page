import { useState } from "react";
import "./Slider.scss";
import images from "./images";
const Slider = () => {
  const [main, setMain] = useState(images[0].image);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMain = (img, index) => {
    console.log(index);
    console.log(img);
    setMain(img.image);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="mainscreen">
        <img src={main} alt="" />
        <div className="items">
          {images.map((img, index) => {
            const activate = activeIndex === index ? "active" : "";
            return (
              <img
                className={activate}
                key={img.id}
                src={img.image}
                alt="images"
                onClick={() => {
                  handleMain(img, index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
