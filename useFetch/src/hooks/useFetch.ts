import axios from "axios"
import { useState, useEffect } from "react"

type paramtype = {
    q:string,
    per_page:number
}
//for obj type Record<string, any>
export const useFetch = <T>(url: string, params?: paramtype) => {
    const [loading, setLoading] = useState(false)
    const[err, setError] = useState(false)
    const[data, setData] = useState<T[]>([])
    useEffect (() => {
        setLoading(true)
        axios.get(url, {
            params: {
                ...params
            }
        }).then(({data}) => {
            setLoading(false)
            setData(data.items);
        }).catch(() => {
            setLoading(false)
            setError(true)
        })   
    }, [params?.q])

    return { loading, data, err}

}