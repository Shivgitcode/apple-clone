import { useState } from "react";
import { images } from "../constants";
import { useEffect } from "react";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";

function CardSlider() {
  const [index, setIndex] = useState(1);
  const [items, setItems] = useState(images);
  const [icons, setIcons] = useState(true);
  const [yo, setYo] = useState(true);
  const [duration, setDuration] = useState(2000);

  function clickHandler(idx) {
    setIndex(idx);
    setIcons(false);
  }

  const scroll = setTimeout(() => {
    if (index === items.length - 1) {
      setIndex(1);
      setYo(false);
    } else if (index === items.length - 2) {
      setDuration(999);
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
      setYo(true);
      setDuration(4000);
    }
  }, duration);
  useEffect(() => {
    handleChange(index);
  }, [index]);

  function increaseHandler() {
    setIndex((prevIndx) => {
      if (index === items.length - 1) {
        return 0;
      }
      return prevIndx + 1;
    });
  }
  function decreaseHandler() {
    setIndex((prevIndx) => {
      if (index === 0) {
        return items.length - 1;
      }
      return prevIndx - 1;
    });
  }

  function handleChange(index) {
    console.log(index);
    setItems((prevItem) => {
      return prevItem.map((el, idx) => {
        if (index === idx) {
          return { ...el, opacity: false };
        } else {
          return { ...el, opacity: true };
        }
      });
    });
    // console.log(items);
  }
  !icons && clearTimeout(scroll);

  function handlePause() {
    setIcons((prev) => !prev);
  }

  function handleStart() {
    setIcons((prev) => !prev);
  }

  return (
    <div className="flex-col overflow-x-hidden mt-4">
      <div className="flex it w-[60%] mx-auto h-full gap-4">
        {items.map((el, idx) => {
          return (
            <>
              <img
                key={idx}
                src={el.image}
                alt=""
                style={{ translate: `${index * -100}%` }}
                className={`${
                  yo ? "transition-all" : "transition-none"
                } duration-1000 ease-in flex-grow-0 flex-shrink-0 ${
                  el.opacity && "opacity-30"
                }`}
              />
            </>
          );
        })}
      </div>

      {/* <img src={images[index]} alt="" /> */}
      <div className="flex flex-row justify-center items-center gap-[1px]">
        <div>
          {items.map((el, idx) => {
            return (
              <button
                key={idx}
                onClick={() => clickHandler(idx)}
                className={`rounded-full px-2 scale-[0.4]  text-transparent transition-all duration-1000 ${
                  !el.opacity ? "bg-black" : "bg-black/30"
                }`}
              >
                {idx}
              </button>
            );
          })}
        </div>

        <div className="relative left-10 top-1">
          {icons ? (
            <button onClick={() => handlePause()}>
              <IoPauseCircleOutline fontSize="20px"></IoPauseCircleOutline>
            </button>
          ) : (
            <button onClick={() => handleStart()}>
              <IoPlayCircleOutline fontSize="20px"></IoPlayCircleOutline>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
