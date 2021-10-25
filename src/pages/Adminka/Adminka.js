import React, { useCallback, useState } from "react";
import s from "./Adminka.module.scss";
import { useSelector } from "react-redux";
import { getPostsAC } from "../../store/postsReducer";
import { useDispatch } from "react-redux";
import { Posts } from "./Posts";
import { AdminAPI } from "../../api/api";

export const Adminka = () => {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");
  const [img, setImg] = useState(null);

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const getPostsData = (userData) => {
    dispatch(getPostsAC(userData));
  };

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("file", img);
      data.append("text", text);
      data.append("tag", tag);

      AdminAPI.addPost(data).then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [text, tag, img]);

  const getPosts = () => {
    try {
      AdminAPI.getPosts().then((res) => {
        getPostsData(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s._wrapper + " " + s.area}>
      <h1>Админка</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          type="text"
          placeholder="Введите сообщение"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="Введите тэг"
          onChange={(e) => setTag(e.target.value)}
        ></input>
        <br />
        <input type="file" onChange={(e) => setImg(e.target.files[0])}></input>
        <br />
        <button onClick={sendFile}>Отправить</button>
      </form>

      <br />
      {/* Отображение постов - пока на странице админки */}
      <div>
        <button onClick={getPosts}>Получить посты</button>
        <Posts posts={posts} />
      </div>
    </div>
  );
};
