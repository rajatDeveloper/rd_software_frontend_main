// import {
//   getAllProjects,
//   getAllClientData,
//   getAllFeedBacks,
// } from "../../../service/home/home_service";
// import React, { useEffect, useState } from "react";
// import "./feedback_list.css";
// const FeedBackList = () => {
//   const [data, setData] = useState([]);

//   const handle = async () => {
//     const res = await getAllFeedBacks();
//     setData(res);
//   };

//   useEffect(() => {
//     handle();
//   }, []);

//   return (
//     <div className="feedback-main-box">
//       <h1 className="feedback-heading">Feedback</h1>
//       <div className="feedback-main-item-box">
//         {data.map((feedback, index) => (
//           <div className="feedback-item" key={index}>
//             <img
//               className="feedback-image"
//               src={feedback.profile_pic}
//               alt={`${feedback.name}'s profile pic`}
//             />
//             <h2>{feedback.name}</h2>
//             <p className="feedback-position">
//               {feedback.position} at {feedback.company}
//             </p>
//             <p className="feedback-des">{feedback.feedback_des}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeedBackList;
import {
  getAllProjects,
  getAllClientData,
  getAllFeedBacks,
} from "../../../service/home/home_service";
import React, { useEffect, useState } from "react";
import "./feedback_list.css";

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
    <div className="feedback-container">
      <h1 className="feedback-heading">Feedback</h1>
      <div className="feedback-cards">
        {data.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <img
              className="feedback-image"
              src={feedback.profile_pic}
              alt={`${feedback.name}'s profile pic`}
            />
            <div className="feedback-author">
              <p><b>{feedback.name}</b></p>
            <i> <p className="feedback-pos">{feedback.position} at {feedback.company}</p></i>
            </div>
            <div className="feedback-quote">
              <p>{feedback.feedback_des}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeedBackList;