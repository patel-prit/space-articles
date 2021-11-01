import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./FullDetail.css";

function FullDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [, setLoading] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const results = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/" + id
      );
      setPost(results.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  console.log(post);
  return (
    <div className="full-detail">
      <div className="full-detail-container">
        <img
          src={post.imageUrl}
          className="img-fluid mx-auto d-block full-detail-image"
          alt=""
        />
        <div className="post-details-container">
          <h3>{post.title}</h3>
          <p>News Site: {post.newsSite}</p>
          <p>Published On: {post.publishedAt}</p>
          <p>{post.summary}</p>
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FullDetail;
