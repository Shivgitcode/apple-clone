import CTALinks from "./CTALinks";

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
        <CTALinks></CTALinks>
      </div>

      <img
        src={props.image}
        alt=""
        className="min-h-[750px] object-cover -z-50 mb-[15px]"
      />
    </div>
  );
}
