import { watchUltra } from "../assets";

function Card({ el }) {
  console.log(el.name);
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex flex-col justify-center items-center absolute w-full mx-auto py-[53px] gap-y-[10px]">
        {el.name.includes("asset") ? (
          <img src={watchUltra} />
        ) : (
          <h1
            className={`text-[40px] leading-[1.1] font-semibold ${el.name.includes("AirPods") && "text-white"
              }`}
          >
            {el.name}
          </h1>
        )}
        <p
          className={` text-[21px] leading-[1.2] font-normal ${el.name.includes("AirPods") && "text-white"
            } `}
        >
          {el.desc}
        </p>
      </div>
      <div className="w-[930px] h-[580px]">
        <img src={el.img} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Card;
