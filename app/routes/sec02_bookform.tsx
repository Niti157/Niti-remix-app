import { useNavigate } from "@remix-run/react";
import { stringify } from "postcss";
import { useState } from "react";

export default function BookForm() {
    const navigate = useNavigate();
    const [stock, setStock] = useState('In-stock');

    const handleSubmit = async(e) =>{
        // --Part 1--
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(
                'http://localhost:3001/api/addBook',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formJson)
                }
            );

            if(response.ok){
                const data = await response.json();
                alert(`[INFO] ${data.message}`);
                navigate('/sec02_bookLists');
            } else {
                alert('[ERR] การบันทึกหนังสือไม่สำเร็จ');
            }

        } catch (error) {
            alert('[ERR] แจ้งข้อผิดพลาดระหว่างการ Submit Form');
        }
       } 
       
       return (
        //-- Part2 --
            <div className="m-3">
                <a href="/sec02_bookLists">[ ข้อมูลหนังสือ ]</a>
                <h1 className="font-bold">เพิ่มหนังสือใหม่</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <label>ชื่อหนังสือ:</label><br/>
                    <input type="text" name="bookTitle" required /><br/>
                    <label>รายละเอียด</label><br/>
                    <textarea rows={3} cols={50} name="bookDesc" /><br/>
                    <label>หมวดหมู่</label><br/>
                    <select name="bookCate" required>
                        <option value="">-เลือกหมวดหมู่</option>
                        <option value={10}>วิทยาศาสตร์</option>
                        <option value={20}>เทคโนโลยี</option>
                        <option value={30}>คอมพิวเตอร์</option>
                    </select><br/>
                    <label>ชื่อผู้แต่ง</label><br/>
                    <input type="text" name="bookAuthor" required /><br/>
                <div className="p-3">
                    <label>สถานะ</label><br/>
                    <input type="radio" name="bookStock" value="In-stock"
                        defaultChecked = {stock === 'In-stock'}
                    />
                    <label>In-Stock</label><br/>
                    <input type="radio" name="bookStock" value="Out-stock"
                        defaultChecked = {stock === 'Out-stock'}
                    />
                    <label>Out-Stock</label><br/>
                    <button type="submit">[ บันทึก ]</button>
                    <button type="reset">[ เคลียร์ ]</button>
                </div>
                </form>
            </div>
        );
}