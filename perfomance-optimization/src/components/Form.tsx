import {memo} from "react"
import { formOptimization } from "./Optimization"

type propsType = {
    handleToggle:(s:number) => void
}

export const Optimizationdata1=(props:formOptimization & propsType) => {


    function generateRandomColor() {
        var letters = '0123456789ABCDEF';

        var color = "#"

        for(var i=0; i<6; i++)
        {
            color+=letters[Math.floor(Math.random() * 16)];
        }
        return color
    }

    const Color = generateRandomColor()




    return <>

        <h3>{props.title} - {props.verify ? "True":"False"}</h3>
        <h3>{props.body}</h3>
        <div id="box" style={{margin:"auto",height:"200px",width:"300px",backgroundColor:Color}}></div>
        <button id ="btn" onClick={ () => props.handleToggle(props.id)}>Verify</button>
    
    </>

}

export const Memomization = memo(Optimizationdata1)