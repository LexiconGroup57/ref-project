import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";


export const useAddReference = () => {
    return useMutation({
        mutationFn: (item) => {
            const response = axios.post("http://localhost:8080/api/v1/references", item);
            return response.data;
        }
    })
}

export const useGetAllReferences = () => {
    return useQuery({
        queryKey: ["references"],
        queryFn: () => {
            const response = axios.get("http://localhost:8080/api/v1/references");
            return response.data;
        }
    })
}