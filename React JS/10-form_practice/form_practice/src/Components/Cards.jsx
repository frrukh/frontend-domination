import React from 'react'
import Card from './Card';

function Cards({data, removeEntry}) {
  return (
    <div className='h-96 p-4 w-full flex items-center justify-center flex-wrap gap-4 overflow-y-auto'>
        {data.map((val, ind)=>{
            return <Card data={val} key={ind} index={ind} removeEntry={removeEntry} />
        })}
    </div>
  )
}

export default Cards;