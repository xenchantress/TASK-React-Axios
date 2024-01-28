import axios from "axios";

const instance = axios.create({
  baseURL: "https://pets-react-query-backend.herokuapp.com",
});

export default instance;