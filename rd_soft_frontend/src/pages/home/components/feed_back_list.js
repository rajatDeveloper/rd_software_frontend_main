import {
  getAllProjects,
  getAllClientData,
  getAllFeedBacks,
} from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";

const FeedBackList = () => {
  const [data, setData] = useState([]);

  const handle = async () => {
    const res = await getAllFeedBacks();
    setData(res);
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div>
      Data from fedback end point : -{data ? <>{data.length} </> : "No data"}
      <h1>Feedback</h1>
      <ul>
        {data.map((feedback, index) => (
          <li key={index}>
            <img
              src={feedback.profile_pic}
              alt={`${feedback.name}'s profile pic`}
            />
            <h2>{feedback.name}</h2>
            <p>
              {feedback.position} at {feedback.company}
            </p>
            <p>{feedback.feedback_des}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedBackList;
