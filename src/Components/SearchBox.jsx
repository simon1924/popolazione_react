
import "../App.css";
// import data from "../file/population_data.json";

function SearchBox({ search, setSearch, onlyNames, popolazioneFiltered, setPopolazioneFiltered }) {
    
    //console.log(datas)

    const handleSearch = (e) => {
        const value = e.target.value;
        //console.log(value);
        setSearch(value);
        console.log("search: " +search);

        // const f = onlyNames.filter((item) => 
        //     //console.log(item.toLowerCase());
        //     //console.log(item.toLowerCase().startsWith(value.toLowerCase()));
        //     item.toLowerCase().startsWith(value.toLowerCase())
        // );
        // console.log(f);
        setPopolazioneFiltered(
            onlyNames.filter((item) => 
                item.toLowerCase().startsWith(value.toLowerCase()))
        );

        //setPopolazioneFiltered(datas);

        console.log(popolazioneFiltered);


    }
    

    return (
        <>
            <div className="searchbox">
                <input className="ricerca" type="text" placeholder="Ricerca paese" onChange={handleSearch} value={search}/>
            </div>
        </>
    )
}

export default SearchBox;
