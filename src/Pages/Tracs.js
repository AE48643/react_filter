import { Filter } from "./Filter";


export const Tracs = () =>
{
   
  const data = [
    ['Name', 'Country'],
    ['Eli', 'Germany'],
    ['Smith', 'Sweden'],
    ['Job', 'UK'],
    ['Donuts', 'Germany'],
  ];

  return <Filter data = {data}/>
}