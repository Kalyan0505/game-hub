import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ce86b12a4ea496cb5d0fda45de07a50",
  },
});


