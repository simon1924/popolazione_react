import data from "./file/population_data.json";
import { useState } from 'react';
import './App.css'
import MyHeader from './Components/MyHeader';
import SearchBox from './Components/SearchBox';
import Sidebar from "./Components/Sidebar";
import ChartComponent from "./Components/ChartComponent";






function App() {


  const [search, setSearch] = useState("");
  const [datiPerGrafico, setDatiPerGrafico] = useState([]);
  const [popolazioneFiltered, setPopolazioneFiltered] = useState([]);
  const [tipoGrafico, setTipoGrafico] = useState(false); //false grafico a barre, true grafico linea
  // const [soloNomi, setSoloNomi] = useState([]); // array completo con solo i nomi dei paesi

  function filtro(array) {
    let nomiSingoli = [];

    array.forEach(item => {
      // console.log(item["Country Name"]);
      nomiSingoli.push(item["Country Name"]);
    })
    let unici = [... new Set(nomiSingoli)];

    //console.log(unici);
    return unici
  }
  let onlyNames = filtro(data);


  // function ottieniDati(array, nome) {

  //   let arrayPerGrafico = [];

  //   array.forEach(item => {
  //     if (item["Country Name"] == nome) {
  //       arrayPerGrafico.push(item);
  //     }
  //   });

  //   //console.log(arrayPerGrafico);
  //   let filtrato = filtroPerGrafico(arrayPerGrafico);
  //   //console.log(filtrato);
  //   return filtrato;

  // }

  // function filtroPerGrafico(array) {
  //   let labels = [], data = [];

  //   array.forEach(item => {
  //     labels.push(item["Year"]);
  //     data.push(item["Value"]);
  //   })

  //   return [labels, data];
  // }



  return (

    <div className='mainContainer'>

      <div className="contenitoreSearchSide">
        <SearchBox
          search={search}
          setSearch={setSearch}
          onlyNames={onlyNames}
          popolazioneFiltered={popolazioneFiltered}
          setPopolazioneFiltered={setPopolazioneFiltered}>
        </SearchBox>
        <Sidebar
          popolazioneFiltered={popolazioneFiltered}
          data={data}
          setDatiPerGrafico={setDatiPerGrafico}>

        </Sidebar>
      </div>
      <div className="prova">

        <MyHeader></MyHeader>

        <ChartComponent
        datiPerGrafico={datiPerGrafico}
        ></ChartComponent>

      </div>





    </div >




  )
}

export default App
