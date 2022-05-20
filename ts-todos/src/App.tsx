
// import {Counter} from './components/Counter';
// function App() {
//   return (
//     <div className="App">
//      Helo
    
//     <Counter init ={0}/>
//     <Counter init ={10}/>
//     </div>
//   );
// }

// export default App;

// import {Counter} from './components/Counter';
// function App() {
//   return (
//     <div className="App">
//      Hello
    
//     <Counter init ={0}>
//       <button>Child button</button>
      
//       </Counter>
    
//     </div>
//   );
// }
// //React.creatElement("h1",null,[])

// export default App;

import {Todos} from './components/Todos';
function App() {
  return (
    <div className="App">
     {/* <Counter onClick={(a,b) => { 
       return ""
     }}/> */}
          {/* <Counter onClick={() => { 
     
     }}/> */}
    <Todos/>
    
    </div>
  );
}
//React.creatElement("h1",null,[])

export default App;
