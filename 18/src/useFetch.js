import React, { useState, useEffect } from 'react'
import axios from 'axios';
import paginate from './utlis'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

function useFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = () => {
        axios(url).then((resp) => {
            console.log(resp.data)
            setData(paginate(resp.data));
            setLoading(false)
        })
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        { loading, data }
    )
}

export default useFetch