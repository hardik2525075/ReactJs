import axios from "axios";

export default axios.create({
  baseURL: "http://restapi.adequateshop.com/api",
  withCredentials: false,
});
