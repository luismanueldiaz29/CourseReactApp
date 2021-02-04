import { useState, useEffect } from 'react'

const useFetch = url  =>  {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }

        fetchExercises()
    }, [url])

    return {data, loading, error}
}

export default useFetch;