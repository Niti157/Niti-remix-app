import { useState } from "react";

let nextId = 0;

export default function CreateCard () {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [img, setImg] = useState('');
    const [cards, setCards] = useState([]);

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

    return (
        <center>
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
            <label className="basis-1/4 m-2 font-bold bg-red-200 rounded-3xl">แนบรูป Url</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cImg"
                value={img}
                onChange={(e) => setImg(e.target.value)}
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
                    <th className="p-3 border">รูป</th>
                </tr>
            </thead>
            <tbody>
                {cards.map(card => (
                     <tr key={card.id}>
                        <td className="p-3 border">{card.id}</td>
                        <td className="p-3 border">{card.name}</td>
                        <td className="p-3 border">{card.note}</td>
                        <td className="p-3 border">{card.img ? (
                                <a href={card.img} target="_blank" rel="noopener noreferrer">
                                    Click here
                                </a>
                            ) : 'No Link'}</td>
                    </tr>
                ))}
                    </tbody>
            </table>
            </div>
        </center>
    );
}