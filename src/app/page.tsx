import React from 'react'

//pages
import Header from './_pages/_header'
import Banner_Main from './_pages/_banner-main'
import Search_Home from './_pages/components/_search-home'
import Popular from './_pages/_popular'

const Page = () => {
  return (
    <>
      <Header />
      <Banner_Main />
      <div className='block lg:hidden px-5 pt-5' ><Search_Home /></div>
      <Popular />
    </>
  )
}

export default Page