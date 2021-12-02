import React, { useEffect } from "react";

import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import RightSideBar from "../components/home/RightSideBar";

import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";
import LeftSidebar from "../components/home/LeftSidebar";

let scroll = 0;

const Home = () => {
  const { homePosts } = useSelector((state) => state);

  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="home">
      <div className="left-sidebar">
        <LeftSidebar />
      </div>
      <div className="feed">
        <Status />

        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No hay Publicaciones</h2>
        ) : (
          <Posts />
        )}
      </div>

      <div className="right-sidebar">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
