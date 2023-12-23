import { featuredProducts } from "../../constants";
import Card from "./Card";
function Featuredproducts() {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-4 mt-3">
      {featuredProducts.map((el) => {
        return <Card el={el}></Card>;
      })}
    </div>
  );
}

export default Featuredproducts;
