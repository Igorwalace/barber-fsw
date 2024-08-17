'use client'
import React from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//react-icons
import { GrMenu } from 'react-icons/gr'

//contexts
import useAppUtils from '@/app/_contexts/utils'

const Menu_Barber = () => {

    const { setOpenSheetMenu } = useAppUtils()

    const handleOpenSheetMenu = () => setOpenSheetMenu(true)

    return (
        <>
            <Button onClick={handleOpenSheetMenu} size='icon' variant='secondary' ><GrMenu /> </Button>
        </>
    )
}

export default Menu_Barber
