function Card({ el }) {
  console.log(el.name);
  return (
    <div>
      {/* {el.name.includes("src") ? (
        <img src={el.name} className="z-30 absolute" />
      ) : (
        <h1 className=" z-30">{el.name}</h1>
      )}
      <p>{el.desc}</p> */}

      <img src={el.img} height="580px" width="930px" />
    </div>
  );
}

export default Card;
