import Link from 'next/link'
import React from 'react'

//fonts
import { righteous } from '../_services/fonts/fonts'

const Footer = () => {
    return (
        <div className='lg:px-10 px-5 py-5 bg-secondary text-sm font-bold' >
            © 2024 Copyright
            {` `}
            <Link href='https://meu-website-igor.vercel.app/' target='_blank' className={`${righteous.className} underline`} >
                <span className='text-primary' >IG</span>Barber FSW
            </Link>
        </div>
    )
}

export default Footer