import { useState } from "react";
import AppMenu from "./template/menu";
import { cards } from "./data";

let nextId = 0;

function Modal({ card, onClose }) {
    if (!card) return null;

    return (
        <div className="p-3 border">
            <div>
                <h2>รายละเอียดนามบัตร</h2>
                <p><strong>ID:</strong> {card.id}</p>
                <p><strong>ชื่อ-สกุล:</strong> {card.name}</p>
                <p><strong>ข้อมูลผู้ถือบัตร:</strong> {card.note}</p>
                <button onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default function CreateCard () {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [img, setImg] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickAdd = (na:string, no:string, img:string) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                note: no,
                img: img,
            }
        ]);
    }

    const handleViewClick = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null)
    };

    return (
        <center>
        <AppMenu/>
        <div>
            <h1 className="basis-1/4 m-2 p-3 font-bold bg-green-200 rounded-3xl">เพิ่มข้อมูลนามบัตร</h1>
            <label className="basis-1/4 m-2 font-bold bg-red-200 rounded-3xl">ชื่อ-สกุล</label><br/>
            <input className="basis-1/4 m-2 p-3 rounded-3xl"
                name="cName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <label className="basis-1/4 m-2 font-bold bg-red-200 rounded-3xl">ข้อมูลผู้ถือบัตร</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cNote"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            /><br/>
            <button className="basis-1/4 m-2 p-3 font-bold bg-green-200 rounded-3xl" onClick={() => handleClickAdd(name, note, img)}>
                เพิ่มนามบัตร
            </button>
            <table>
            <thead>
                <tr>
                    <th className="p-3 border">ID</th>
                    <th className="p-3 border">ชื่อ-สกุล</th>
                    <th className="p-3 border">ข้อมูลผู้ถือบัตร</th>
                    <th className="p-3 border">ดูข้อมูลบัตร</th>
                </tr>
            </thead>
            <tbody>
                {cards.map(card => (
                     <tr key={card.id}>
                        <td className="p-3 border">{card.id}</td>
                        <td className="p-3 border">{card.name}</td>
                        <td className="p-3 border">{card.note}</td>
                        <td className="p-3 border">
                            <button className="basis-1/4 m-2 p-3 font-bold bg-green-200 rounded-3xl" onClick={() => handleViewClick(card)}>
                                view
                            </button>
                        </td>
                    </tr>
                ))}
                    </tbody>
            </table>
            </div>
            <Modal card={selectedCard} onClose={handleCloseModal}/>
        </center>
    );
}