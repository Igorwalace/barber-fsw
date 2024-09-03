'use client'

//context
import useAppUtils from "@/app/_contexts/utils";

//shadcn
import { Button } from "@/app/_services/components/ui/button";

interface UserLoginProps {
    session: any
}

const UserLoginSearch = ({ session }: UserLoginProps) => {

    const { setOpenDialogLogin } = useAppUtils()

    return (
        <>
            <Button onClick={() => setOpenDialogLogin(true)} className='lg:text-2xl text-xl font-normal p-0 hover:no-underline' variant='link' >Olá, faça seu login!</Button>
        </>
    )
}

export default UserLoginSearch;