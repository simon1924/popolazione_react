import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import "../App.css"


function Grafico(props){

    console.log(props);
    let etichette = props[0];
    let dati = props[1];


    return(
        <>
        <div className="chart">
                <Bar
                    data={{
                        labels: etichette,
                        datasets: [
                            {
                                label: "revenue",
                                data: dati
                            }
                        ]
                    }}>

                </Bar>


            </div>
        </>

    );

}

export default Grafico;