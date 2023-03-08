import React from 'react'

function Heading(props) {
  return (
    props.margin ?
    <div className='lg:w-8/12 w-11/12 text-left mx-auto font-bold 
    border-b pb-2 mb-3 border-b-slate-400 mt-20'>
        {props.text}
    </div>:
    <div className='lg:w-8/12 w-11/12 text-left mx-auto font-bold 
    border-b pb-2 mb-3 border-b-slate-400'>
        {props.text}
    </div>
  )
}

export default Heading