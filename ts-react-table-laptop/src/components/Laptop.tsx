import React, { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"

type productType = {
    id:number,
    model:string,
    makeyear:number,
    operatingsystem:string,
    screenheight:number,
    screenwidth:number,
    price:number

}

export const Laptop=() => {

    const[formdata, setFormdata] = useState({}) // for to setdata and post to the server
    const[dataSetTable, setdataSetTable] = useState<productType[]>([])
    const[sortdata, setSortdata] = useState<productType[]>([])

    const handlechange=(e:any) => {

        const input = e.target.name

        setFormdata({...formdata,
        [input]:e.target.value})

     
    }
 

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios.get("http://localhost:8080/laptop")
        .then((response : AxiosResponse<productType[]>) => {
            const { data } = response


            setdataSetTable(data)

            console.log(data,"the setdata")

        })
    }


    const handleSort = () => {

        dataSetTable.sort(function(a,b){
            return b.price-a.price
        })

        setSortdata(dataSetTable)

        console.log(dataSetTable,"sorted")

    }

 
        return <>


             <div>
        
            <form   onSubmit={ () => {

             axios.post("http://localhost:8080/laptop",formdata).then(getData)

            }}>
              
                    <h3>Id</h3>
                    <input name="id" placeholder="id" onChange={handlechange}/>

                    <h3>MODEL</h3>
                    <input name="model" placeholder="model" onChange={handlechange}/>

                    <h3>MAKE YEAR</h3>
                    <input name="makeyear" placeholder="make year" onChange={handlechange}/>

                    <h3>OPERATING SYSTEM</h3>
                    <input name="operatingsystem" placeholder="operating system" onChange={handlechange}/>

                    <h3>SCREEN HEIGHT</h3>
                    <input name="screenheight" placeholder="screen height" onChange={handlechange}/>

                    <h3>SCREEN WIDTH </h3>
                    <input name="screenwidth"  placeholder="screen width" onChange={handlechange}/>

                    <h3>PRICE</h3>
                    <input name="price" placeholder="screen height" onChange={handlechange}/>
<br/><br/>
                    <input id="price"  type="submit" />

            </form>

            </div>

                <div>
                    <button id="price"onClick={handleSort}>Sort</button>
                </div>

            <div id="main">

                <table >

                <thead id="head">
                    <tr>
                        <td id="tabled">id</td>
                        <td id="tabled">Model</td>
                        <td id="tabled">Make year</td>
                        <td id="tabled">Operating system</td>
                        <td id="tabled">Screen height</td>
                        <td id="tabled">Screen Width</td>
                        <td id="tabled">Price</td>
                    </tr>
                </thead>

            </table>    

             {dataSetTable.map((t) => (

                <>
                   <tbody id="head">
                            <td id="tableh1">{t.id}</td>
                            <br/>
                            <td id="tableh1">{t.model}</td>

                            <td id="tableh1">{t.makeyear}</td>

                            <td id="tableh1">{t.operatingsystem}</td>

                            <td id="tableh1">{t.screenheight}</td>

                            <td id="tableh1">{t.screenwidth}</td>

                            <td id="tableh1">{t.price}</td>
                    </tbody>
                    
                </>
             ))}
            </div>
        
        </>
    
  
}