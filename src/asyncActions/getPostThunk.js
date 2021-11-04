import { PostsAPI } from "../api/api";
import { getPostsAC } from "../store/postsReducer";

export const getPostThunk = (tag) => {
  return async (dispatch) => {
    try {
      PostsAPI.getPosts(tag).then((res) => {
        dispatch(getPostsAC(res.data));
        console.log(res.data)
      });
    } catch (error) {
      console.log(error);
    }
  };
};

