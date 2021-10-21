import axios from "axios";
import React, { useCallback, useState } from "react";
import s from './Adminka.module.scss'

export const Adminka = () => {
    const [text, setText] = useState("");
    const [tag, setTag] = useState("");
    const [img, setImg] = useState(null);

    const sendFile = useCallback(async () => {
        try {
            const data = new FormData();
            data.append('file', img);
            data.append('Text', text)
            data.append('Tag', tag)
            
            await axios.post('https://nauchki.herokuapp.com/post', data, {
                headers: {
                    'content-type': 'multipart/form-data',
                    withCredentials: true
                }
            })
            .then(res => console.log(res.data))
        } catch (error) {console.log(error);}
    }, [text, tag, img])


    return (
       <div className={s._wrapper + ' ' + s.area}> 
           <h1>Админка</h1>
           <form onSubmit={e => { e.preventDefault(); }}>
               <textarea type="text" placeholder="Введите сообщение" onChange={e => setText(e.target.value)}></textarea><br/>
               <input type="text" placeholder="Введите тэг" onChange={e => setTag(e.target.value)}></input><br/>
               <input type="file" onChange={ e => setImg(e.target.files[0])}></input><br/>
               <button onClick={sendFile}>Отправить</button>
            </form >
       </div>
    )
}