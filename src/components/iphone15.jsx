import { FaChevronLeft } from "react-icons/fa";

export default function IPhone15(props) {
  return (
    <div className="relative">
      <div className="z-25 absolute top-20 w-full ">
        <h1
          className={`text-${props.color} z-50 text-[56px] font-semibold text-center`}
        >
          {props.name}
        </h1>
        <p
          className={` font-normal text-[28px] text-${props.color} text-normal text-center capitalize`}
        >
          {props.title}
        </p>
        <div className="flex flex-row justify-center items-center gap-8 mt-[8px] ">
          <div className="text-[#2997ff] flex items-center gap-3">
            <a
              href=""
              className=" text-[21px] leading-[29px] hover:border-b-[1px] border-[#2997ff]  box-border"
            >
              Learn More
            </a>
            <FaChevronLeft className=" rotate-180 " />
          </div>

          <div className="text-[#2997ff] flex items-center gap-3 ">
            <a
              href=""
              className="text-[#2997ff] text-[21px] leading-[29px] hover:border-b-[1px] border-[#2997ff] box-border"
            >
              Buy
            </a>
            <FaChevronLeft className=" rotate-180 stroke"></FaChevronLeft>
          </div>
        </div>
      </div>

      <img
        src={props.image}
        alt=""
        className="min-h-[750px] object-cover -z-50"
      />
    </div>
  );
}
