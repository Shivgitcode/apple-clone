import { products } from "../constants";
import DropdownLinks1 from "./DropdownLinks1";
import DropdownLinks2 from "./DropdownLinks2";

export default function Dropdown({ dataHandler, id }) {
  const index = id;
  const el = products[index];

  return el.columns.length > 2 ? (
    <DropdownLinks1 el={el} />
  ) : (
    <DropdownLinks2 el={el} />
  );
}
