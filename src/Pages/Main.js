import { useState } from "react";
import { Filter } from "./Filter";

export const Main = () =>
{
  const [data, setData] = useState([
    ['Name', 'Country', 'Start'],
    ['Eli', 'Germany', '11:40AM '],
    ['Smith', 'Sweden', '2:30PM'],
    ['Job', 'UK', ],
    ['Donuts', 'Germany', ''],
  ]);
  return < Filter data = {data}/>
}