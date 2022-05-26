// import React from 'react';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import { Fetch } from '../Hooks/Fetch';
import TextField from '@mui/material/TextField';

// import styles from '../Components/country.module.css';

const COUNTRY ="http://localhost:8080/data";
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });
export const Country = () => {



    const [fetch, setFetch] = useState("")


    const {data , err , load} = Fetch(COUNTRY, {
        per_page:5, 
        q:fetch || "masai-codes"
    })
    console.log(fetch);
    const handleChange = (e:any) => {
        setFetch(e.target.value)

    }
    console.log(data);

    return (
        <>
         <CssTextField sx={{marginTop:"100px"}} label="Value " id="custom-css-outlined-input" onChange={handleChange} />
        {/* <input id="input1" placeholder="Value" type="fetch" /> */}
        {/* <div className={styles.overflow}> */}
        <div className="App"> 
            { load ? (
                <div><h1>.....Loading</h1></div>
            ) : err ? (
                <div>something went wrong</div>

            ) : 
            data.map((el:any) => {
                return (
                    <div>
                        <h3>{el.country}</h3>
                    </div>
                )
            })
            }


        </div>
        </>
    )
}