import axios from "axios";
import { deleteCookie} from "cookies-next";
axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "login" && err.response) {
            if (err.response.status === 499 && !originalConfig._retry) {
                originalConfig._retry = true;
                if (originalConfig.url === "refresh-token") {
                    deleteCookie("userId");
                }
            }
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                const urlString = "refresh-token";
                const result = await axiosInstance.post(urlString);
                if (result?.data?.success === true) {
                    return axiosInstance(originalConfig);
                }
            }
        }

        return Promise.reject(err);
    }
);
