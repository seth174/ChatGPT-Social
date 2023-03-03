import { FC } from "react"
import React from 'react'
import useFetch from './components/custom_hooks/useFetch';
import IOpenAIRequest from "./components/models/open_ai/IOpenAIRequest";
import IOpenAIResponse from "./components/models/open_ai/IOpenAIResponse";

const Home: FC = () => {
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

const Profile: FC = () => {
    return <h1>Profile</h1>
}

const Rand: FC = () => {
    return <h1>Whatever</h1>
}

export { Home, Profile, Rand }