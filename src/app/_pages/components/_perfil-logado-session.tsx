import { auth } from "@/app/_services/auth/auth";

//shadcn
import { Avatar, AvatarImage } from "@/app/_services/components/ui/avatar";

const Perfil_Logado_Session = async () => {

    const session = await auth()

    return (
        <>
            <Avatar>
                <AvatarImage src={session?.user?.image ?? ''} />
            </Avatar>
            <h1 className='text-base font-bold' >{session?.user?.name}</h1>
        </>
    );
}

export default Perfil_Logado_Session;