import { navlinks } from "../../constants";
import { logo, Bag, search } from "../assets";
import { FaApple } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import Dropdown from "./Dropdown";
import { useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div>
      <ul className="flex flex-row justify-center items-center gap-x-[25px] w-fit mx-auto capitalize z-[100] h-fit ">
        <li className="px-[8px]">
          <img src={logo} alt="" />
        </li>
        {navlinks.map((el, index) => {
          return (
            <li
              key={el.id}
              className="text-[12px] leading-[12px] tracking-[-0.12px] text-white/80 px-[8px] cursor-pointer"
              onMouseEnter={() => {
                setShow(true);
                setId(index);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
            >
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

      <div
        className={`absolute text-white z-50 top-[48px] w-full bg-[#1d1d1f] flex ${
          show
            ? " opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2"
        } transition-all duration-200 ease-in-out`}
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        <Dropdown id={id}></Dropdown>
      </div>
    </div>
  );
}
