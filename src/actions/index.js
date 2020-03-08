import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    dispatch({
      type: types.GET_POSTS,
      payload: response.data
    });
  } catch(e) {
    console.log(e)
  }
};
