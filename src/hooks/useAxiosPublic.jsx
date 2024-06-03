import axios from "axios";
const server_url = import.meta.env.VITE_SERVER_URL;
const axiosPublic = axios.create({
  baseURL: `${server_url}`,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
