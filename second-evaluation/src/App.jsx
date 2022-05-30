import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination  } from "./Components/Pagination";
import web from './Components/eye.svg';
import React , {useState}from "react";
function App() {
  const [count] = useState(1)

  const handle= (e)=>{
     console.log(e)
  }

  return (
    <div className="container">
      <Input  
      rightLogo={web}
       />

      <Image  src="https://freedesignfile.com/upload/2017/10/Beautiful-professional-women-Stock-Photo.jpg" 
      borderRadius="50%"
      width="100px"
      height="100px"
      />

<Pagination  total={20}  selected={1}  key={1}   onPageChange={(e)=>{handle(e)} }/>
    </div>
  );
}

export default App;