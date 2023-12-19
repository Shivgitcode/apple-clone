import { products } from "../../constants";

export default function Dropdown({ dataHandler, id }) {
  const index = id;
  const el = products[index];
  return (
    <div
      key={el.id}
      className="flex w-11/12 ml-[50px]"
      onMouseEnter={() => dataHandler(el.id)}
    >
      {el.columns.map((el) => {
        return (
          <ul>
            <h1>{el.h1}</h1>
            {el.links.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        );
      })}
    </div>
  );
}
