import { useState, useEffect } from 'react'
import API_KEY from './keys'
import { SEARCH_ENGINE_ID } from './keys';
const GoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData()
    }, [term])
    return { data }
}

export default GoogleSearch  