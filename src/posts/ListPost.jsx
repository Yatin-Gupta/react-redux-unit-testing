import React, { Component } from "react";
import { connect } from "react-redux";

import { PostsUpdateAction } from "../actions";

class ListPost extends Component {
  componentDidUpdate() {
    console.log("Posts");
    console.log(this.props.posts);
  }

  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.props.loadPosts();
          }}
        >
          Load Posts
        </button>
        <ul>
          {this.props.posts.length > 0
            ? this.props.posts.map(post => <li key={post.id}>{post.title}</li>)
            : ``}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(PostsUpdateAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPost);
