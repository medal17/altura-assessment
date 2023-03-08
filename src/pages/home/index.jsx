import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/cards/ProductCard'
import ProductModal from '../../components/modals/ProductModal'
import Navbar from '../../components/navbar/Navbar'
import Heading from '../../components/others/heading'
import HomeHeroSection from '../../components/others/hero-section/HomeHeroSection'
import { ntfList } from '../../helpers/dummyList'

function Home() {

  const [pickedProduct, setPickedProduct] = useState();
  useEffect(()=>{
  }, [pickedProduct])


  return (
    <div className='overflow-hidden wrapper'>
      <HomeHeroSection/>
      <Heading text='Our Collections'/>
      <div className='lg:w-8/12 md:w-11/12 w-11/12 mx-auto flex flex-wrap 
      justify-center lg:justify-start md:justify-between'>
        {ntfList.map((item, index)=> <ProductCard key={index} data={item} setPicked={setPickedProduct} />
          )}
      </div>
      <ProductModal data={pickedProduct} setPicked={setPickedProduct}/>
    </div>
  )
}

export default Home