import React from "react";

import Posts from "./component/Post";
import PostForm from "./component/PostForm";

import { Provider } from "react-redux"; //provider is glue between react and redux
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" />
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
