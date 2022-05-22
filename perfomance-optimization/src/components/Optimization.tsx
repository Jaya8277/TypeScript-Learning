import { useCallback, useState } from "react"
import { Memomization } from "./Form"
import { Timer } from "./Timer"

export type formOptimization = {

    id:number,
    title:string,
    body:string,
    verify:boolean

}

export const Optimization = () => {

const [optimizationdata, setOptimizationdata] = useState({
    id:Math.random(),
    title:"",
    body:"",
    verify:false
})
  const [state, setState] = useState<formOptimization[]>([])

  const handleChange = (e:any) => {
        var input = e.target.name

        setOptimizationdata({...optimizationdata,
        [input]:e.target.value})

    }
    const handleClick = (e:any) => {
        e.preventDefault()
       
        setState([...state,optimizationdata])      
    }

    // console.log(state)

    const handleToggle = (id:number) => {
        setState(state.map((l) => (l.id === id ? {...l,verify:!l.verify}:l)))
        console.log("tytuy")
  
    }

    const callback = useCallback(handleToggle,[state])

    return <>  

    <div>
    <Timer/>
    </div> 

    <input id="input" type="text" name="title" placeholder="Enter the Tittle" onChange={handleChange}/><br/><br/>
    <input id="input"   type="text" name="body" placeholder="Enter the Body"onChange={handleChange}/><br/>
    <button id="btn" onClick={handleClick}>Add</button>


    {state.map((t) => {
        return <>

            <Memomization key={t.id} {...t} handleToggle={callback} />
        </>
    })}
    </>

} 