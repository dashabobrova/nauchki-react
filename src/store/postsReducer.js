export const GET_POSTS = "GET_POSTS";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export const getPostsAC = (payload) => ({ type: GET_POSTS, payload });
