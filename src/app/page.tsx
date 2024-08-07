import React from 'react'

//pages
import Header from './_pages/_header'
import Banner_Main from './_pages/_banner-main'
import Search_Home from './_pages/components/_search-home'
import Popular from './_pages/_popular'
import Re_Banner from './_pages/_recomendados-banner'

const Page = () => {
  return (
    <>
      <Header />
      <Banner_Main />
      <div className='block lg:hidden px-5 pt-5' ><Search_Home /></div>
      <div className='block lg:hidden' ><Re_Banner /></div>
      <Popular />
    </>
  )
}

export default Page