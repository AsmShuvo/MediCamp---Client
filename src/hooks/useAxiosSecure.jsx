import axios from "axios";
const server_url = import.meta.env.VITE_SERVER_URL;
const axiosSecure = axios.create({
  baseURL: `${server_url}`,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
