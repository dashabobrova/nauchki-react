import React from "react";

export const PostItem = ({ post }) => {
  return (
    <div>
      <div className="post__card ">
        {/* <p>#{post.tag}</p>
        <p>{post.text}</p> */}
        {post.img && (
          <img className="post__card-img" src={post.img} alt="Картинка" />
        )}
      </div>
      <p className="post__card-title">Название</p> {/* на серваке пока нет */}
    </div>
  );
};

/* Картинку обернуть в ссылку, в которой id будет post.id???? 
-эта фильтрация делается в редаксе - в результате отрисовывается то компонент, с которым совпало d(см в ГБ)*/
