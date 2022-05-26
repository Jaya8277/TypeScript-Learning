import axios from "axios";
import { useState , useEffect} from "react";

type countryType = {
    q:string,
    per_page:number
}

export const Fetch = <T>(url : string, params? : countryType) => {
    const [load, setLoad] = useState(false)
    const[err, setError] = useState(false)
    const[data, setData] = useState<T[]>([])
    useEffect (() => {
        setLoad(true)
        axios.get(url, {
            params: {
                ...params
            }
        }).then(({data}) => {
            setLoad(false)
            setData(data);
        }).catch(() => {
            setLoad(false)
            setError(true)
        })

    }, [params?.q]);
    return { load,data,err}
}