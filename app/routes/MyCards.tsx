import { cards } from "./data";
import { useState } from "react";

function IsMember ({ act } : { act: boolean}) {
    if(act)
        return <span>✅ Hi, Vip Member.</span>
    else
        return <span>❌ Member Only!</span>
}

function Profile ({id, nam, bio, bgp, imgu, usrn, cdat, act} : {id:number, nam:string, bio:string, bgp:string, imgu:string, usrn:string, cdat:string, act:boolean })
{   return (

<div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${bgp})` ,color:"blue" }} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
{/*   <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only */}
        <IsMember
         act={act}
         />
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">{usrn}</div>
      <p className="text-gray-700 text-base">{bio}</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="/image/img3.jpg" alt="Avatar of Boss"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{nam}</p>
        <p className="text-gray-600">{cdat}</p>
      </div>
    </div>
  </div>
</div>

)}

export default function MyCards () {
    const [active, setActive] = useState(true);

    const name = "Niti Pakjamsai";
    const note = "#Web Programing";
    const note2 = "#Software Engineering"
    const chk = true;

    const items = cards.filter((cardItem) => cardItem.active === active);

    const cardItems = items.map((cardItem) => (
        <Profile
            key={cardItem.id}
            id={cardItem.id}
            nam={cardItem.name}
            bio={cardItem.bio}
            bgp={cardItem.bgprof}
            imgu={cardItem.usericon}
            usrn={cardItem.username}
            cdat={cardItem.createdat}
            act={cardItem.active}
        />
    )
  );
  function handleClickAtive() {
    setActive(true);
    //alert("After, handleClickAtive --> "+active);
  }
  function handleClickNoAtive() {
  
    setActive(false);
    //alert("After, handleClickNoAtive --> "+active);
  }
return (
  <div className="m-10 bg-sky-300 p-10 rounded-3xl">
    <>
      <h1 className="font-bold text-3xl">My Cards: {name}</h1>
      <div className="flex flex-row">
        <div className="basis-1/4 m-2 p-3 font-bold bg-red-200 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>
          {note}
        </div>
        <div className="basis-1/2 m-2 p-3 bg-green-200 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          {note2}
        </div>
      </div>
      {}
      <hr />
      <div className="flex flex-row">
      <button className="w1/2 bg-green-700 text-green-100 rounded-3xl" onClick={handleClickAtive}>Active</button>
      <button className="w1/2 bg-green-700 text-green-100 rounded-3xl" onClick={handleClickNoAtive}>No Active</button>
      </div>
      {/* <center><Profiles /></center> */}
      {cardItems}
    </>
  </div>
);
}