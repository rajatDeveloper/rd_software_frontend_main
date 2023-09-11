import { getAllProjects } from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";

const Project_list = () => {
  const [data, setData] = useState([]);

  const handle = async () => {
    // setData(await getAllProjects());
    const res = await getAllProjects();
    setData(res);
  };

  useEffect(() => {
    handle();
  }, []);

  return <div>{data ? <>{data.length } </>: "No data"}</div>;
};

export default Project_list;
