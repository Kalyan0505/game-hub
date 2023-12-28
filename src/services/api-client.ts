import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[]; // T is a generic type parameter
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ce86b12a4ea496cb5d0fda45de07a50",
  },
});


