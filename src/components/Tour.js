import React from 'react'
import Card from './Card'


const Tour = ({data,btnHandler}) => {
  return (
     <div className='wrap'>

       <div className='Heading'>
          <h2 className='head'>Plan With Love</h2>
       </div>

        <div className='cards'>
              
                      {   data.map((x)=>{
                           return <Card  {...x} btnHandler={btnHandler}></Card>
                      })}
               
        </div>

     </div>
  )
}

export default Tour;