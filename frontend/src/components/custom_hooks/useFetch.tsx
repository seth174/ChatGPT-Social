import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios';

interface IUseFetchProps {
    config: AxiosRequestConfig<any>,
}

const useFetch = <T,>(props: IUseFetchProps): [boolean, T | undefined, string] => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        setLoading(true);
        axios(props.config).then((response) => {
            setError('');
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    return [loading, data, error];
}

export default useFetch;