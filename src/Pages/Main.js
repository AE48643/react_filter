import { useState } from "react";
import { Filter } from "./Filter";

export const Main = () =>
{
  const [data, setData] = useState([
    ['Name', 'Country'],
    ['Eli', 'Germany'],
    ['Smith', 'Sweden'],
    ['Job', 'UK'],
    ['Donuts', 'Germany'],
  ]);
  return < Filter data = {data}/>
}