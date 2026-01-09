import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_URL } from "../utils/config";



export interface contentType {
    _id: string;
    title: string;
    link: string;
    type: "youtube" | "x" | "document";
    body?: string;
    tags?: string[]; //isko optional nhi rakhna h , ek baar code ko run or samajhne ke liye optional rakh diya h
    userId: string;
    shareToken: string;
    shareExpiresAt: Date;

}

interface UseContentResult {
    contents: contentType[];
    loading: boolean;
    refetch: () => Promise<void>;
}

export const useContent = (): UseContentResult => {
    const [contents, setContents] = useState<contentType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (): Promise<void> => {

        try {
            setLoading(true);
            const response = await axios.get(Backend_URL + "/api/v1/content", {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })

            setContents(response.data.content);
        } catch (error) {
            console.log('Failed to fetch the content', error);
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData();
    }, [])


    return { contents, loading, refetch: fetchData };
}