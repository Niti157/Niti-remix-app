import { useParams } from "@remix-run/react";
import Profile from "./card.MyCards";
import { cards } from "./data";

export default function GetCard() {
    const cardID = useParams();

    const items = cards.filter((cardItem) => cardItem.id === Number(cardID.cardID));

    const cardItems = items.map((cardItem) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${cardItem.bgprof})` ,color:"blue" }} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">{cardItem.username}</div>
      <p className="text-gray-700 text-base">{cardItem.bio}</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="/image/img3.jpg" alt="Avatar of Boss"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{cardItem.name}</p>
        <p className="text-gray-600">{cardItem.createdat}</p> 
      </div> 
          <a href={`/card/${cardItem.id}`} className="basis-1/4 m-2 p-3 font-bold bg-green-300 rounded-3xl">
          View
          </a>
    </div>
  </div>
</div>
    ));

    return (
        <>
       {cardItems}
        </>
    );
}