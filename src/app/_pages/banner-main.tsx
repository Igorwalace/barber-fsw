import React from 'react'

//shadcn

//react-icons
import Re_Banner from './recomendados-banner'
import Search_Home from './components/search-home'

const Banner_Main = () => {
    return (
        <>
            <main className='p-16 h-[463px] w-full relative lg:block hidden'>
                <div className=' w-full bg-cover absolute top-0 bottom-0 left-0 right-0 opacity-35 -z-10' id='banner'></div>
                <div className="flex items-center justify-between">
                    <div className='w-80 h-80' >
                        <Search_Home />
                    </div>
                    <Re_Banner />
                </div>
            </main>
        </>
    )
}

export default Banner_Main