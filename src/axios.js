import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-server.herokuapp.com/",
});

export default instance;
