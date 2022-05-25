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
  const { data, e, Load} = useFetch<User>(URL, {
    per_page:9,
    q: text || "Jaya8277"
  })
  console.log(text)
  const onChangeDebounced = useDebouncedCallback((e) => setText(e.target.value),[],1000,0)
  return  (
    <div className="App">
      <h1>Searh GitHub UserName</h1>
            <input id="input1" placeholder="Enter The UserName" type="text" onChange={onChangeDebounced}/>
            {  
            Load ? ( <div><h1>...Load Ho Rha Hai</h1></div>
              ) : e ? (
              <div>Kuch To Galat hai</div> 
              ) :
            data.map((user) => {
              return (
              <div id="box" key={user.id}>
                <p>{user.id}</p>
                <h2>{user.login}</h2>
                <img id="image1" src={user.avatar_url} alt =""/>
              </div>
              )
        })} 
        
    </div>
  );
}
export default App;