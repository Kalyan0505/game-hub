import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";

import genres from "../Data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => 
   useQuery({
    queryKey: ["genres"],
    queryFn:  apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // This is 24hrs
    initialData: { count: genres.length, results: genres, next: null }, // This data is added to our cache
  });

export default useGenres;
