import Link from 'next/link'
import React from 'react'

//fonts
import { righteous } from '../_services/fonts/fonts'

const Logo = () => {
    return (
        <div>
            <div className={`${righteous.className} text-primary text-3xl font-bold`} >
                <Link href='/' >IG<span className='text-white' >Barber</span></Link>
            </div>
        </div>
    )
}

export default Logo