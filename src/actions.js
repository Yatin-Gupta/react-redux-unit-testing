import axios from "axios";
export const PostsUpdateAction = () => async (dispatch) => {
  if (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        console.log(response);
        dispatch({
          type: "POSTS_UPDATE",
          payload: response.data
        });
      })
      .catch((err) => {
        throw err;
      });
  }
};
