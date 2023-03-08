import React from 'react'
import Image from '../../assets/images/hero-image.jpg'
import { currencyFormat } from '../../helpers/currencyFormat'

function ProductCard(props) {
  return (
    <div onClick={()=>props.setPicked(props.data)} className='shadow-lg lg:w-3/12 md:w-4/12 w-full pb-3 my-3 rounded-b-md cursor-pointer '>
        <div className='mx-2'>
            <div className='h-fit'>
                <img className='rounded-t-lg rounded-bl-sm rounded-br-2xl h-44 w-full'  src={props?.data.image}/>
            </div>
            <div className='px-2 my-3'>
                <h3>{props?.data?.title}</h3>
                <p className='text-sm text-gray-500'>
                    {props.data.description <=100 ? props.data.description : props.data.description.substring(0,99)+'...' }
                </p>
                <div className='flex justify-between my-4 border-t border-t-slate-300 pt-4'>
                    <span className='text-sm text'>{currencyFormat(props.data.price?props.data.price:0, '$')}</span>
                    <span className='text-sm text-white text-center bg-blue-600 rounded-md cursor-pointer px-2 py-1'>Buy Now</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard