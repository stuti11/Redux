import { FETCH_POSTS, NEW_POSTS } from "./type";

// export function fetchPosts() {
//   return function(dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//         })
//       );
//   };
// }

//converted ES6 expression
export const fetchPosts = () => dispatch => {
  console.log("fetching....");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
// postData : is the new post object which you want to post it
export const createPosts = post => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json()) //first need to tell it is in which type
    .then(post =>
      dispatch({
        type: NEW_POSTS,
        payload: post
      })
    );
};
