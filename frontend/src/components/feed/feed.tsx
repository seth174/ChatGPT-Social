import { FC } from "react";
import useFetch from "../custom_hooks/useFetch";
import IOpenAIRequest from "../models/open_ai/IOpenAIRequest";
import IOpenAIResponse from "../models/open_ai/IOpenAIResponse";

const Feed: FC = () => {
    const [loading, data, error] = useFetch<IOpenAIResponse>(
        {
            config:
            {
                method: 'post',
                data: { prompt: "Write a java class dog" } as IOpenAIRequest,
                url: 'http://localhost:8080/api/v1/chat-gpt'
            }
        });
    if (loading) return <h1>Loading...</h1>
    return <h1>{data?.response}</h1>
}

export default Feed;