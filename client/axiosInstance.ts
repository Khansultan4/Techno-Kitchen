import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

let accessToken: string = "";

function setAccessToken(newToken: string): void {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig): AdaptAxiosRequestConfig => {
    // * для передачи куки
    config.withCredentials = true;

    if (!config.headers.Authorization) {
      config.headers.Authorization = accessToken;
    }
    return config;
  }
);

export { setAccessToken };

export default axiosInstance;
