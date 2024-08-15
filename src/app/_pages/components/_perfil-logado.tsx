import { auth } from "@/app/_services/auth/auth";
import { Avatar, AvatarImage } from "@/app/_services/components/ui/avatar";

const Perfil_Logado = async () => {

    const session = await auth()

    return (
        <>
            <div className='flex gap-2 items-center' >
                <Avatar>
                    <AvatarImage src={session?.user?.image ?? ''} />
                </Avatar>
                <h1 className='text-base font-bold' >{session?.user?.name}</h1>
            </div>
        </>
    );
}

export default Perfil_Logado;