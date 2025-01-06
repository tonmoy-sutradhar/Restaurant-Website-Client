import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptors 401 , 403 status
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
      if (status === 401 || 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
