import { useState, useEffect } from "react";

export const Timer=() => {

    const [second,setSeconds] = useState(0)

    useEffect(() =>{
        const id = setInterval(() => setSeconds((psecond) => psecond+1),1000)

        return () => {
            clearInterval(id)
        }
    },[])

    return <>
    
    <h1 id="h1">Count</h1>
<h1>{second}</h1>
    </>
}