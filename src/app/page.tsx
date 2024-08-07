import React from 'react'

//pages
import Header from './_pages/header'
import Banner_Main from './_pages/banner-main'
import Search_Home from './_pages/components/search-home'

const Page = () => {
  return (
    <div className='' >
      <Header />
      <Banner_Main />
      <div className='block lg:hidden px-5 pt-5' ><Search_Home /></div>
    </div>
  )
}

export default Page