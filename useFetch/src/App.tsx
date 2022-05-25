import React from 'react';
// import axios from "axios";
import { useDebouncedCallback } from '@react-hookz/web';
import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

const URL = "https://api.github.com/search/users"
type User = {
  id: number;
  login:string;
  avatar_url:string;
  per_page:number
}
function App() {
  const [text, setText] = useState("")
  const { data, err, loading} = useFetch<User>(URL, {
    per_page:5,
    q: text || "Jaya8277"
  })
  console.log(text)
  const onChangeDebounced = useDebouncedCallback((e) => setText(e.target.value),[],1000,0)
  return  (
    <div className="App">
            <input type="text" onChange={onChangeDebounced}/>
            {  
            loading ? ( <div><h1>.....Loading</h1></div>
              ) : err ? (
              <div>something went wrong</div> 
              ) :
            data.map((user) => {
              return (
              <div key={user.id}>
                <p>{user.id}</p>
                <h2>{user.login}</h2>
                <img style={{width:"200px", height:"200px"}} src={user.avatar_url} alt =""/>
              </div>
              )
        })} 
        
    </div>
  );
}
export default App;