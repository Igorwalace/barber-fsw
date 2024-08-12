import React from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//react-icons
import { GrMenu } from 'react-icons/gr'

const Menu_Barber = () => {
    return (
        <>
            <Button size='icon' variant='secondary' ><GrMenu /> </Button>
        </>
    )
}

export default Menu_Barber
