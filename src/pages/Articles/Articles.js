import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPostThunk } from "../../asyncActions/getPostThunk";
import { useSelector } from "react-redux";
import { PostsCardsArea } from "./PostsCardsArea";
import { Route, Switch } from "react-router-dom";
import { OnePost } from "./OnePost";
import { getTagsThunk } from "../../asyncActions/getTagsThunk";
import { Themes } from "./Themes";
import { isLoadingAC } from "../../store/postsReducer";

export const Articles = () => {
  const dispatch = useDispatch();
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    dispatch(getPostThunk());
    dispatch(getTagsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPostThunk(currentTag.tag));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTag]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="articles">
      <div className="acticles__container">
        <Themes currentTag={currentTag} setCurrentTag={setCurrentTag} />
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
                render={() => (
                  <PostsCardsArea posts={posts} />
                )}
              />
              <Route
                exact
                path="/articles/:id"
                render={(props) => <OnePost {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
