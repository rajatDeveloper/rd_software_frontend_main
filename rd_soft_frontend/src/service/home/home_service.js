import axios from "axios";
import { baseUrl, projectUrl } from "../../utils/api_const";

 const getAllProjects = async () => {
 const res =  await axios
    .get(baseUrl + projectUrl)
   
    return res.data


};
export { getAllProjects}