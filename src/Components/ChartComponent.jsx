import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import "../App.css"
import { useState } from "react";


function ChartComponent({primo, secondo}){

    
    console.log(primo, secondo);

    return(
        <>
        <div className="chart">
                <Bar
                    data={{
                        labels: primo,
                        datasets: [
                            {
                                label: "population",
                                data: secondo
                            }
                        ]
                    }}>

                </Bar>


            </div>
        </>

    );

}

export default ChartComponent;