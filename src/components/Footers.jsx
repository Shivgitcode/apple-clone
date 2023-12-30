import React from "react";

export default function Footers({ item }) {
  return (
    <div className="flex flex-col justify-start items-start gap-3">
      {item.element.map((section) => {
        return (
          <div className="flex flex-col">
            <h1 className="w-full text-[12px] text-black/90 leading-[16px] tracking-[-0.12px] font-semibold mr-[20px] mb-[9px] ">
              {section.heading}
            </h1>
            <ul className="flex flex-col justify-start items-start">
              {section.links.map((link) => {
                return (
                  <li className="text-[12px] leading-[16px] tracking-[-0.12px] text-black/60 mb-[9px]">
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
