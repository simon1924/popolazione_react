import "../App.css";
import data from "../file/population_data.json";

function SearchBox({data}){


    const ricerca = (e) => {
        console.log(e.target.value);
        
    }

    

    return(
        <>
        <div className="searchbox">
            <input className="ricerca" type="text" placeholder="Ricerca paese" onChange={ricerca}/>
        </div>
        </>
    )
}

export default SearchBox;
