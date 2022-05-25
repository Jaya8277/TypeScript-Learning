import axios from "axios"
import { useState, useEffect } from "react"

type paramtype = {
    q:string,
    per_page:number
}
export const useFetch = <T>(url: string, params?: paramtype) => {
    const [Load, setLoad] = useState(false)
    const[e, setError] = useState(false)
    const[data, setData] = useState<T[]>([])
    useEffect (() => {
        setLoad(true)
        axios.get(url, {
            params: {
                ...params
            }
        }).then(({data}) => {
            setLoad(false)
            setData(data.items);
        }).catch(() => {
            setLoad(false)
            setError(true)
        })   
    }, [params?.q])

    return { Load, data, e}

}