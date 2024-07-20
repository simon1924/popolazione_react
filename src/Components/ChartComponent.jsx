import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import "../App.css"
// import { useState } from "react";
// import React from 'react'



function ChartComponent({datiPerGrafico}){

    
    //console.log(datiPerGrafico);

    return(
        <>
        <div className="chart">
                <Bar
                    data={{
                        labels: datiPerGrafico[0],
                        datasets: [
                            {
                                label: "population",
                                data: datiPerGrafico[1]
                            }
                        ]
                    }}>

                </Bar>


            </div>
        </>

    );

}

export default ChartComponent;