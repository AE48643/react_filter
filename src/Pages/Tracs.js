import { Filter } from "./Filter";


export const Tracs = () =>
{
   
  const data = [
    ['Name', 'Country', 'Phone Number'],
    ['Eli', 'Germany', '7082891360'],
    ['Smith', 'Sweden', '708984572'],
    ['Job', 'UK', '908586743'],
    ['Donuts', 'Germany', '251345079'],
  ];

  return <Filter data = {data}/>
}