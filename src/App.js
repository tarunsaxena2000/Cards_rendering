
import './App.css';
import React, { useState} from 'react';
import data from './data'
import Tour from './components/Tour'

function App() {
         
   const [Data,setData]=useState(data);
    function  btnHandler(id){
          const newtours = Data.filter(d=> d.id !==id )
          setData(newtours);
    }


     if(Data.length===0){
         return (<>
              <h1 className="HEAD">No Data Found</h1>     
              <button  onClick={()=>setData(data)}>Refresh</button>   
               </>)
     }
     
  return (
    <div className="App">
          <Tour   data={Data}   btnHandler={ btnHandler}></Tour>
    </div>
  );
}

export default App;
