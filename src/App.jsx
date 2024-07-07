// import { useState } from 'react';

// import data from "./file/population_data.json";

import './App.css'
import Sidebar from "./Components/Sidebar";


// function filtro(array) {
//   let nomiSingoli = [];

//   array.forEach(item => {
//     // console.log(item["Country Name"]);
//     nomiSingoli.push(item["Country Name"]);
//   })
//   let unici = [... new Set(nomiSingoli)];

//   // console.log(unici);
//   return unici
// }
// let datas = filtro(data);


// const handleChange = (e) => {
//   const { value } = e.target;
//   alert(`${value}`);
// };









function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <Sidebar></Sidebar>




      {/* <div className='App'>

        { <div className='card'>
          {
            datas.map(item => {
              return (
                <>
                  <label>
                    <input type="radio" name="country" onChange={handleChange} value={item} />
                    {item}
                  </label>

                </>

              )
            })
          }
        </div> }

        


      </div> */}
    </>
  )
}

export default App
