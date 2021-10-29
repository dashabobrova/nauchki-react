import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostThunk } from "../../asyncActions/getPostThunk";
import { useSelector } from "react-redux";
import { PostItem } from "../Adminka/PostItem";

export const Articles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="articles">
      <div className="acticles__container">
        <div className="themes">
          <div className="themes__title">Темы</div>
          <div class="themes__line"></div>
          {/* тут мэпом выводить все существующие темы = таги */}
        </div>
        <div>
          <h1 className="articles__title">Интересные статьи</h1>
          <div className="acticles__cards">
            <div className="acticles__cards-wrapper">
              {posts.map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
