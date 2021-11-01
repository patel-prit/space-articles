import React, { useEffect } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function Post({ posts }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, [posts]);
  return (
    <div className="data-list">
      <ul className="list-group ">
        {posts.map((post) => (
          <div key={post.id} className="media post-container">
            <Link to={`/articles/${post.id}`}>
              <img
                src={post.imageUrl}
                className="rounded float-left post-image"
                alt=""
              />
            </Link>
            <div className="media-body post-container-detail">
              <Link to={`/articles/${post.id}`}>
                <h5 className="mt-0">{post.title}</h5>
              </Link>
              <p>News Site : {post.newsSite}</p>
              <p>{post.summary}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Post;
