import React from 'react'

//shadcn
import { Button } from '../_services/components/ui/button'

//shadcn
import { IoIosArrowForward } from 'react-icons/io'

const Button_Arrow = () => {
    return (
        <Button variant='outline' size='icon' className='absolute top-[50%] right-5 z-10 border-2 border-accent rounded-full' ><IoIosArrowForward /></Button>
    )
}

export default Button_Arrow