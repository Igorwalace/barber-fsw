'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//react-icons
import { IoIosArrowBack } from 'react-icons/io'

const Arrow_Back = () => {

    const router = useRouter()

    const handleButtonBack = () => {
        router.back()
    }

    return (
        <>
            <Button onClick={handleButtonBack} size='icon' variant='secondary' ><IoIosArrowBack /></Button>
        </>
    )
}

export default Arrow_Back