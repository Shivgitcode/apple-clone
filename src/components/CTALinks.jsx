import { FaChevronLeft } from "react-icons/fa";
function CTALinks() {
  return (
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
  );
}

export default CTALinks;
