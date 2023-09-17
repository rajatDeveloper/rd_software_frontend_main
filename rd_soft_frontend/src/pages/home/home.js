import React from "react";

import Project_list from "./components/project_list";
import ClientList from "./components/client_list";
import FeedBackList from "./components/feed_back_list";

const Home = () => {
  return (
    <div>
      home
      <br></br>
      <Project_list />
      <ClientList />
      <FeedBackList />
    </div>
  );
};

export default Home;
