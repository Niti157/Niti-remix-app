import { useState } from "react";
import { sculpturelist } from "./SculptureLists";

export default function EProject() {
    const [index,setIndex] = useState(0);
    const [setList,setsctList] = useState(sculpturelist);

    function handleClickDel() {
        
    }

    let sculpture = sculpturelist[index];

    return (
        <>
           <h1 className="w1/2 bg-green-700 text-green-100 rounded-3xl">Card Project</h1>
            {
                setList.map(sculpture => (
        <div key={sculpture.id}>
            <h2 className="basis-1/4 m-2 p-3 font-bold bg-red-200 rounded-3xl">
                    <i>{sculpture.name}</i> โดย {sculpture.author}
            </h2>
            <img 
                src={sculpture.url}
                title={sculpture.name} 
                width="25%"
            />
            <p className="w1/2 bg-green-700 text-green-100 rounded-3xl">
                {sculpture.description}
            </p>
            <p className="basis-1/4 m-2 p-3 font-bold bg-green-200 rounded-3xl">
                <a href={sculpture.reference}>Reference</a>
            </p>
            <button className="w1/2 bg-green-700 text-green-100 rounded-3xl" onClick={() => {
                setsctList(
                    setList.filter(tmp =>
                        tmp.id != sculpture.id
                    )
                );
            }}>Delete</button>
        </div>  
          
         )
         )
    }
    </>
    )
}