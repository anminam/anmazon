import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/anmazon/us-central1/api",
  baseURL: "https://us-central1-anmazon.cloudfunctions.net/api",
});

export default instance;
