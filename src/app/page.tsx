import React from 'react'
import Image from 'next/image'

//pages
import Header from './_pages/_header'
import Banner_Main from './_pages/_banner-main'
import Search_Home from './_pages/components/_search-home'
import Popular from './_pages/_popular'
import Re_Banner from './_pages/_recomendados-banner'
import More_Visits from './_pages/_more-visits'
import Footer from './_pages/_footer'
import Categorys from './_pages/_categorys'

const Page = () => {
  return (
    <>
      <Header />
      <Banner_Main />
      <div className='block lg:hidden px-5 pt-5' ><Search_Home /></div>
      <div className='block lg:hidden px-5 pt-5' ><Categorys /></div>

      <div className='lg:hidden block px-5' >
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      
      <div className='block lg:hidden' ><Re_Banner /></div>
      <Popular />
      <More_Visits />
      <Footer />
    </>
  )
}

export default Page