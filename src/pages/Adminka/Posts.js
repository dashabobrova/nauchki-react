import React from "react";

export const Posts = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <li key={post.id}>
          <div>#{post.tag}</div>
          <div>{post.text}</div>
          <img
            src={post.img}
            alt="Картинка"
          />
        </li>
      ))}
    </div>
  );
};
