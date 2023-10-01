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
    <div className="main-project-box">
      <h1 className="project-heading">Past Work</h1>
      <div className="main-project-box-item">
        {data.map((project, index) => (
          // -------------
          <div className="project-item" key={index}>
            <div className="project-cat">
              <div className="cat-box">{project.category}</div>
            </div>
            <img
              className="project-image"
              src={project.cover_image}
              alt={project.name}
            />
            <div className="project-name">
              <p className="project-name-text">{project.name}</p>
            </div>
            <div className="project-short-desc">
              <p className="project-short-desc-text">{project.short_des}</p>
            </div>
            <div className="project-link">
              <a
                href={project.link}
                target="_blank"
                className="project-link-box"
              >
                Visit Site
              </a>
            </div>

            {/* <h2>{project.name}</h2>
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
          <p>Created At: {project.created_at}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project_list;
