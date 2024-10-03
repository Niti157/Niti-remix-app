import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function BookLists(){
    const navigate = useNavigate();
    const [loadStatus, setloadStatus] = useState(true);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        if(loadStatus){
              try {
            const fetchData = async() => {
                const book = await fetch(
                  'http://localhost:3001/api/getBooks'  
                );
                if(book.ok){
                    const bookJson = await book.json();
                    setBookData(bookJson);
                } else {
                    alert('[ERR] ไม่สามารถอ่านข้อมูลได้')
                }
            }
            fetchData().catch(console.error);
            setloadStatus(false);
        } catch (error) {
            alert('[ERR] เกิดข้อผิดพลาดในการอ่านข้อมูลหนังสือ');
        } 
    }
     
    }, [loadStatus]);

    const handleDelete = (bookCode) => {
       alert(`กำลังลบหนังสือรหัส: ${bookCode}`)
       try {
        const fetchData = async() => {
            const data = await fetch(
                `http://localhost:3001/api/deleteBook/${bookCode}`,
                {
                    method: 'DELETE'
                }
            );
            if(data.ok){
                const myJson = await data.json();
                alert(myJson.message);
            }else{
                alert('[ERR] การลบข้อมูลไม่สำเร็จ');
            }   
        }
          fetchData()
          setloadStatus(true);
       } catch (error) {
            alert('[ERR] เกิดข้อผิดพลาดขณะลบข้อมูล');
       }   
    }

    return (
        <div className="m-3">
            <a href="/sec02_bookform">[ เพื่มหนังสือ ]</a>
            <h1 className="font-bold">รายการหนังสือ</h1>
            {
                bookData.map((item, index) =>
                    <>
                    <div className="font-bold p-s m-2 border">
                        <p>Title: {item.bookTitle}</p><br/>
                        <p>Description: {item.bookDesc}</p><br/>
                        <p>Category: {item.bookCate}</p><br/>
                        <p>Author: {item.bookAuthor}</p><br/>
                        <p>Status: {item.bookStock}</p>
                    </div>
                    <div className="p-2 m-2 border">
                        <a href={`/sec02_bookDetail/${item.id}`}>[รายละเอียด]</a>
                        <a href={`/sec02_bookEditForm/${item.id}`}>[แก้ไข]</a>
                        <button onClick={(e) => handleDelete(`${item.id}`)}>[ลบ]</button>
                    </div>
                    </>
                )
            }
            <a href="/sec02_bookform">[ ย้อนกลับ ]</a>
        </div>
    );
}