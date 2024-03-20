import { Filter } from "./Filter";
import './filter.css'


export const Tracs = () =>
{
  const backgroundImage = 'https://www.trnty.edu/wp-content/uploads/2019/02/commencement-DSC02734-1.jpg'
  const data = [
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Joan', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'], 
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Ruth', 'Ethiopia', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Yari', 'Mexico', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Jacob', 'US', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Hyun', 'Korea', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Gun', 'Korea', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Izzy', 'US', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Sharon', 'Germany', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
  ];

  return <Filter data = {data} backgroundImage={backgroundImage}/>
}