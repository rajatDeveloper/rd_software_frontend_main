import { getAllProjects } from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";
import "./project_list.css";

const Project_list = () => {
  const [data, setData] = useState([]);

  const handle = async () => {
    const res = await getAllProjects();
    setData(res);
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div>
      Data from project end point : -{data ? <>{data.length} </> : "No data"}
      <ul>
        <h1>List of pROJECTS</h1>

        {data.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>
              Link:{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </p>
            <img src={project.cover_image} alt={project.name} />
            <p>Short Description: {project.short_des}</p>
            <p>Long Description: {project.long_des}</p>
            <p>Category: {project.category}</p>
            <p>Created At: {project.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project_list;
