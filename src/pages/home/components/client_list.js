import {
  getAllProjects,
  getAllClientData,
  getAllFeedBacks,
} from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";

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
    <div>
      Data from client end point : -{data ? <>{data.length} </> : "No data"}\
      <div>
        <h1>List of Clients</h1>
        <ul>
          {data.map((client, index) => (
            <li key={index}>
              <h2>{client.company_name}</h2>
              <img src={client.cover_image} alt={client.company_name} />
              <p>Short Description: {client.short_des}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientList;
