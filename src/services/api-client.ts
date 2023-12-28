import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[]; // T is a generic type parameter
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ce86b12a4ea496cb5d0fda45de07a50",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll =(config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
