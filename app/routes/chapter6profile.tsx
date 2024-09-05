import { useState , useEffect } from "react";

export default function GetProfiles() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:3000/api/getProfiles');

            if(!response.ok){
                console.log('Network response was not ok')
            }
        
        const result = await response.json();
        setData(result);
        setLoading(false);
        };

        fetchData();
    }, []);

    if(loading){
        return <p className="m-5 p-5">Loading...</p>
    }

    return (
        <div className="items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
            <h1 className="text-2xl font-bold">Hello</h1>

            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data.image}/>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {(data.fname)} {(data.lname)}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                {(data.major)}
            </span>
        </div>
        </div>
    );
}