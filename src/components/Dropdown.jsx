import { products } from "../../constants";

export default function Dropdown() {
  return products.map((el) => {
    return (
      <div key={el.id} className="flex w-11/12 ml-[50px]">
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
  });
}
