import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { currencyFormat } from '../../helpers/currencyFormat'


function ProductModal(props) {
    const [picked, setPicked] = useState({})
    const [image, setImage] = useState(null)
    const navigate = useNavigate();
    useEffect(()=>{
        setPicked(props.data);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    },[props.data])

  return (
    picked ?
    <div onClick={()=>props.setPicked('')} className='w-full z-50 fixed mx-auto top-0 h-full bg-opacity-50 bg-gray-900 flex overflow-hidden'>
       <div className='my-auto lg:w-4/12 w-10/12 mx-auto'>
            <div className='rounded-full bg-white text-red-500 font-extralight 
            h-fit px-2 py-0.5 w-fit mb-2 ml-auto cursor-pointer justify-self-center'>X</div>
            <div className='bg-white  rounded-t-lg rounded-bl-sm rounded-br-2xl p-3 m-auto'>  
                {props.data && <img className='max-h-56 rounded-md w-full text-center' src={props.data?props?.data?.image:'/'} alt='Image'/> }   
                <div className=''>
                        <h2 className='font-semibold my-3'>{props?.data?.title}</h2>
                        <h2 className='text-sm text-gray-500 my-3'>{props?.data?.description}</h2>
                        <p className='text-sm mb-2 text-gray-600 text-center'><span className='text-xs text-black font-semibold'>Author's Address: </span>{props?.data?.authorAddress}</p>
                        <div className='flex justify-between border-t border-t-slate-400 pt-5'>
                            <span>{currencyFormat(props?.data?.price?props?.data?.price:0, '$')}</span>
                            <a href='//opensea.io/category/art' target={'blank'}  className='text-sm text-white text-center bg-blue-600 rounded-md cursor-pointer px-6 py-2'>
                                Buy  
                            </a>
                        </div>
                    </div>
            </div>
       </div>
       
        
    </div>:<></>
    
  )
}

export default ProductModal