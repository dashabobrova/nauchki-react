import { AdminAPI } from "../api/api";
import { getPostsAC } from "../store/postsReducer";

export const getPostThunk = () => {
  return async (dispatch) => {
    try {
      AdminAPI.getPosts().then((res) => {
        dispatch(getPostsAC(res.data));
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
};
