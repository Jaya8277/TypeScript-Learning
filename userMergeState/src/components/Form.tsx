import React, { useState } from "react";
import { Merge } from "../hooks/Merge";

type FormTypes = {
    name:string,
    email:string, //options?:
    password:string, //options?:
}

export const Form = () => {
    const initState = [{name: "name", email: "email", password: "password",}]
    const {handleChange, formdata} = Merge(initState)
    const [state, setState] = useState<FormTypes[]>([])
    
    console.log(initState,"initialstate")

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setState(formdata)
    }

    console.log(state,"state")
    let data:any = state
    console.log(data,"data")

    return (
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Username" onChange={handleChange} /><br/><br/>
            <input name="email" type="email" placeholder="E-mail" onChange={handleChange} /><br/><br/>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/><br/>
            <input id="submit" type="submit"/>
        </form>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.password}</h1>
        </div>
        </>
    )
}