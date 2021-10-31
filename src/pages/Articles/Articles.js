import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostThunk } from "../../asyncActions/getPostThunk";
import { useSelector } from "react-redux";
import { PostsCardsArea } from "./PostsCardsArea";
import { Route, Switch } from "react-router-dom";
import { OnePost } from "./OnePost";

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
          <div className="themes__line"></div>
          {/* тут мэпом выводить все существующие темы = таги */}
        </div>
        <div>
          <h1 className="articles__title">Интересные статьи</h1>
          <input
            className="acrticles__search"
            placeholder="Поиск по статьям"
          ></input>
          <div className="acticles__cards">
            <Switch>
              <Route
                exact
                path="/articles"
                render={() => <PostsCardsArea posts={posts} />}
              />
              <Route exact path="/articles/:id" render={(props) => <OnePost {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
