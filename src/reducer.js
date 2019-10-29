import { combineReducers } from "redux";

const LangReducer = (state, action) => {
  switch (action.type) {
    case "LANG_UPDATE":
      return action.payload;
    default:
      return state ? state : "";
  }
};

const PostsReducer = (state, action) => {
  switch (action.type) {
    case "POSTS_UPDATE":
      return action.payload;
    default:
      return state ? state : [];
  }
};

const rootReducer = combineReducers({
  lang: LangReducer,
  posts: PostsReducer
});

export default rootReducer;
