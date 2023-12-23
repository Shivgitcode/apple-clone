import large from "../videos/large.mp4";
import Watch from "../assets/asset 2.png";

function Player() {
  return (
    <div className="relative">
      <video
        loop
        autoPlay={true}
        muted
        src={large}
        className="-z-50 w-full max-h-[750px] relative object-cover "
      ></video>
      <div className="absolute top-[70%] left-[32%] flex flex-col justify-center items-center gap-5">
        <img src={Watch} alt="" />
        <h1 className="text-[28px] leading-[1.1072] font-normal text-white ">
          Double tap. A magical new way to use Apple Watch
        </h1>
        <div className="flex flex-row justify-center items-center gap-4">
          <button className="px-[21px] py-[11px] bg-white rounded-[40px]">
            Learn More
          </button>
          <button className="px-[21px] py-[11px] bg-white rounded-[40px]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
