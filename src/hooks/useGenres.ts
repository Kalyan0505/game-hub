import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../Data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // This is 24hrs
    initialData: {count: genres.length, results: genres}    // This data is added to our cache
  });

export default useGenres;
