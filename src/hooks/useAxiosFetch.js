import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {

        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchDetails = async (url) => {
           try {
            const response = await axios.get(url, {
                cancelToken: source.token
            });
            if (isMounted) {
                setData(response.data)
                setError(null)
            }
           } catch(err) {
            if (isMounted) {
                setError(err.message)
                setData([])
            }
           }
        }
        fetchDetails(dataUrl)

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp
    }, [dataUrl])

    return {data, error}
}

export default useAxiosFetch