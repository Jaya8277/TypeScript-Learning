import { useState } from "react";

type FormTypes = {
    name:string,
    email: string,
    password: string
}
export const Merge = (initstat: FormTypes[]) => {
    const [formdata, setFormdata] = useState(initstat)
    const handleChange =(e:any) => {
        var input = e.target.name
        setFormdata({...formdata,[input]:e.target.value})
    }
    return {handleChange,formdata}
}