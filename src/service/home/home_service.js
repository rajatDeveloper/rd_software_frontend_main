import axios from "axios";
import {
  baseUrl,
  clientUrl,
  feedbackUrl,
  projectUrl,
} from "../../utils/api_const";

const getAllProjects = async () => {
  const res = await axios.get(baseUrl + projectUrl);

  return res.data;
};

const getAllClientData = async () => {
  const res = await axios.get(baseUrl + clientUrl);

  return res.data;
};

const getAllFeedBacks = async () => {
  const res = await axios.get(baseUrl + feedbackUrl);

  return res.data;
};

export { getAllProjects, getAllClientData, getAllFeedBacks };
