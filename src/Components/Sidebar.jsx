import "../App.css"
import data from "../file/population_data.json";
import ChartComponent from "./ChartComponent";
import { useState } from "react";
import SearchBox from "./SearchBox";



// function filtro(array) {
//     let nomiSingoli = [];

//     array.forEach(item => {
//         // console.log(item["Country Name"]);
//         nomiSingoli.push(item["Country Name"]);
//     })
//     let unici = [... new Set(nomiSingoli)];

//     // console.log(unici);
//     return unici
// }
// let datas = filtro(data);


// function ottieniDati(array, nome) {

//     let arrayPerGrafico = [];

//     array.forEach(item => {
//         if (item["Country Name"] == nome) {
//             arrayPerGrafico.push(item);
//         }
//     });

//     //console.log(arrayPerGrafico);
//     let filtrato = filtroPerGrafico(arrayPerGrafico);
//     //console.log(filtrato);
//     return filtrato;

// }

// function filtroPerGrafico(array) {
//     let labels = [], data = [];

//     array.forEach(item => {
//         labels.push(item["Year"]);
//         data.push(item["Value"]);
//     })

//     return [labels, data];
// }

// let datiTemp;

// const handleChange = (e) => {
//     const { value } = e.target;
//     datiTemp = ottieniDati(data, value);
//     // alert(`${value}`);
//     console.log(datiTemp);

// };



function Sidebar() {

    let [popolazioneDati, setpopolazioneDati] = useState([]);

    function filtro(array) {
        let nomiSingoli = [];

        array.forEach(item => {
            // console.log(item["Country Name"]);
            nomiSingoli.push(item["Country Name"]);
        })
        let unici = [... new Set(nomiSingoli)];

        // console.log(unici);
        return unici
    }
    let datas = filtro(data);


    function ottieniDati(array, nome) {

        let arrayPerGrafico = [];

        array.forEach(item => {
            if (item["Country Name"] == nome) {
                arrayPerGrafico.push(item);
            }
        });

        //console.log(arrayPerGrafico);
        let filtrato = filtroPerGrafico(arrayPerGrafico);
        //console.log(filtrato);
        return filtrato;

    }

    function filtroPerGrafico(array) {
        let labels = [], data = [];

        array.forEach(item => {
            labels.push(item["Year"]);
            data.push(item["Value"]);
        })

        return [labels, data];
    }


    const handleChange = (e) => {
        //e.preventDefault();
        const { value } = e.target;
        setpopolazioneDati(ottieniDati(data, value));
        // alert(`${value}`);
        console.log("popolazioneDati")
        console.log(popolazioneDati);
        //console.log("ciaoooo")

    };




    return (
        <>
            <div className="mContainer">
                <div className="contenitore">
                    <SearchBox paesi={data}></SearchBox>

                    <div className="Sidebar">
                        <ul>
                            {
                                datas.map(item => {
                                    return (
                                        <>
                                            <li>
                                                <label>
                                                    <input type="radio" name="country" onChange={handleChange} value={item} />
                                                    {item}
                                                </label>
                                            </li>

                                        </>

                                    )
                                })
                            }
                        </ul>
                    </div>



                </div>
                <ChartComponent primo={popolazioneDati[0]} secondo={popolazioneDati[1]}></ChartComponent>

            </div>






        </>
    )
}

export default Sidebar;
