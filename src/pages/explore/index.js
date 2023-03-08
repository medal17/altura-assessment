import React, { useState } from 'react'
import ProductCard from '../../components/cards/ProductCard'
import ProductModal from '../../components/modals/ProductModal'
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/others/heading';
import { ntfList } from '../../helpers/dummyList';

function Explore() {
  const [pickedProduct, setPickedProduct] = useState();

  return (
    <div className='overflow-hidden wrapper'>
        <Heading text='Our Collections' margin={true}/>
        <div className='lg:w-8/12 md:w-11/12 w-11/12 mx-auto flex flex-wrap justify-center lg:justify-start md:justify-between'>
            {ntfList.map((item, index)=> <ProductCard key={index} data={item} setPicked={setPickedProduct} />
            )}
        </div>
        <ProductModal data={pickedProduct} setPicked={setPickedProduct}/>
    </div>
  )
}

export default Explore