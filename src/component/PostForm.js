import React, { Component } from "react";
import { createPosts } from "../action/postAction";
import { connect } from "react-redux";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // onchange fun binding ; inside constructor
  }
  // for arrow fun dont use bind
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const result = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPosts(result);
  }

  render() {
    return (
      <div>
        <h3>ADD POSTS : IT IS FROM POSTFORM.JS</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title :</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body :</label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//export default PostForm;
export default connect(null, { createPosts })(PostForm);
