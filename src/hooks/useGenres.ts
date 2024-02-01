import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";

import genres from "../Data/genres";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // This is 24hrs
    initialData: genres, // This data is added to our cache
  });

export default useGenres;
