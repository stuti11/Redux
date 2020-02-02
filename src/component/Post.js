import React, { Component } from "react";
import { connect } from "react-redux"; // connect component to redux-store
import { fetchPosts } from "../action/postAction";

class Posts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  //   console.log("call1");
  // }
  // componentWillMount() {
  //   console.log("call 2");
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         posts: data
  //       })
  //     );
  // }
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(abc => (
      <div key={abc.id}>
        <h3> {abc.title}</h3>
        <p> {abc.body}</p>
      </div>
    ));
    console.log("call3");
    return (
      <div>
        <h1> POSTS </h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

//export default Posts;
export default connect(mapStateToProps, { fetchPosts })(Posts); //Posts : component
