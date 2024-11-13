import {
  getAllProjects,
  getAllClientData,
  getAllFeedBacks,
} from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";
import "./client_list.css";

const ClientList = () => {
  const [data, setData] = useState([]);

  const handle = async () => {
    const res = await getAllClientData();
    setData(res);
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <div className="client-main-box">
      <h1 className="client-heading">Our Clients</h1>

      <div className="client-item-box">
        {data.map((client, index) => (
          <div className="client-item" key={index}>
            <h2>{client.company_name}</h2>
            <img
              className="client-image"
              src={client.cover_image}
              alt={client.company_name}
            />
            <p className="client-text">{client.short_des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
