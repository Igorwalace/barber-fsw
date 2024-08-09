import React from 'react'

//fonts
import { righteous } from '../_services/fonts/fonts'

const Logo = () => {
    return (
        <div>
            <button className={`${righteous.className} text-primary text-3xl font-bold`} >IG<span className='text-white' >Barber</span></button>
        </div>
    )
}

export default Logo