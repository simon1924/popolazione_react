import data from "../file/population_data.json";
import { useState } from "react";

function FunzioniFiltri(){


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
    return { popolazioneDati, filtro, ottieniDati, filtroPerGrafico}

}

export default FunzioniFiltri;