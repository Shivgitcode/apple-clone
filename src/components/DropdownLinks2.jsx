import React from "react";

function DropdownLinks2({ el }) {
  return (
    <div
      key={el.id}
      className="flex justify-start items-start w-[44%] mx-auto pt-[40px] pb-[84px] px-[22px]  "
      onMouseEnter={() => dataHandler(el.id)}
    >
      <ul className="pr-[88px] flex flex-col items-start gap-[4px]">
        <h1 className="text-[12px] leading-[16px] tracking-[-0.12px] text-[#86868b] mb-[2px]">
          {el.columns[0].h1}
        </h1>
        {el.columns[0].links.map((el) => {
          return (
            <li className="text-[24px] leading-[28px] tracking-[0.216px] text-[#e8e8ed]">
              {el}
            </li>
          );
        })}
      </ul>
      <ul className="pr-[88px] flex flex-col items-start gap-[4px]">
        <h1 className="text-[12px] leading-[16px] tracking-[-0.12px] text-[#86868b] mb-[2px]">
          {el.columns[1].h1}
        </h1>
        {el.columns[1].links.map((el) => {
          return (
            <li className="text-[12px] leading-[16.0005px] tracking-[-0.12px]">
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownLinks2;
