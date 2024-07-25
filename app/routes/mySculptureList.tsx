import { useState } from "react";
import { sculpturelist } from "./SculptureLists";

export default function EProject() {
    const [index,setIndex] = useState(0);
    const [sctList,setsctList] = useState(sculpturelist);

    function handleClickNext() {
        setIndex((Index) => (Index + 1) % sculpturelist.length);
    }

    function handleClickBack() {
        setIndex((Index) => (Index - 1 + sculpturelist.length) % sculpturelist.length);
    }

    let sculpture = sculpturelist[index];

    return (
        <>
            <button className="w1/2 bg-green-700 text-green-100 rounded-3xl" onClick={handleClickNext}>
                Next   
            </button>
            <p>
                <button className="w1/2 bg-green-700 text-green-100 rounded-3xl" onClick={handleClickBack}>
                Back
            </button>
            </p>
            <h2 className="basis-1/4 m-2 p-3 font-bold bg-red-200 rounded-3xl">
                <i>{sculpture.name}</i> โดย 
                {sculpture.author}
            </h2>        
            <h3 className="basis-1/4 m-2 p-3 font-bold bg-red-200 rounded-3xl">
                {index + 1} จาก {sculpturelist.length}
            </h3>
            <img 
                src={sculpture.url}
                title={sculpture.name} 
                width="25%"
            />
            <p className="basis-1/4 m-2 p-3 font-bold bg-green-200 rounded-3xl">
                <a href={sculpture.reference}>Reference</a>
            </p>
        </>
    );
}