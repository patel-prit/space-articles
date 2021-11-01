import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";
import "./Articles.css";
function Report() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const results = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/reports"
      );
      setPosts(results.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  function handlePostPerPageChange(e) {
    setPostPerPage(e.target.value);
  }
  const indexOfLastPost = currentpage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="report mt-5">
      <h2 className="text-primary mb-3 text-center">Reports on Space Flight</h2>
      <div className="drop-down-for-post">
        <label className="my-1 mr-2 label-size" for="postPerPage">
          Preference
        </label>
        <select
          defaultValue={postPerPage}
          onChange={handlePostPerPageChange}
          className="custom-select my-1 mr-sm-2"
          id="postPerPage"
        >
          <option selected value={5}>
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <Post posts={currentPost} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Report;
