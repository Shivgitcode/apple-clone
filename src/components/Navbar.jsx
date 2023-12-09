import { navlinks } from "../../constants";
import { logo, Bag, search } from "../assets";
import { FaApple } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
export default function Navbar() {
  return (
    <ul className="flex flex-row justify-center items-center gap-x-[25px] w-fit mx-auto capitalize">
      <li className="px-[8px]">
        <img src={logo} alt="" />
      </li>
      {navlinks.map((el) => {
        return (
          <li className="text-[12px] leading-[12px] tracking-[-0.12px] text-white/80 px-[8px] cursor-pointer">
            {el.link}
          </li>
        );
      })}
      <li className="px-[8px]">
        <img src={search} alt="" />
      </li>
      <li className="px-[8px]">
        <img src={Bag} alt="" />
      </li>
    </ul>
  );
}
