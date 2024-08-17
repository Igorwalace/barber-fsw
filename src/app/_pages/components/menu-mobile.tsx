'use client'
//react-icons
import { IoExitOutline, IoReloadCircleOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

//shadcn
import { Button } from "@/app/_services/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "@/app/_services/components/ui/sheet"
import { Separator } from "@/app/_services/components/ui/separator";
import { Avatar, AvatarImage } from "@/app/_services/components/ui/avatar";

//react-next
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

//pages
import Dialog_Login from "./_dialog-login";
import { quickSearchOptions } from "@/app/_constants/_search";

const Menu_Mobile = ({ session }: any) => {

    const [openSheetMenu, setOpenSheetMenu] = useState(false)
    const [openDialogLogin, setOpenDialogLogin] = useState(false)
    const [loadingSignout, setLoadingSignout] = useState(false)

    const handleSignout = async () => {
        setLoadingSignout(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSignout(false)
        }
    }

    return (
        <>
            <Button variant="link" size="icon" onClick={() => setOpenSheetMenu(true)} ><FiMenu color='white' size={20} /></Button>
            <Sheet open={openSheetMenu} onOpenChange={setOpenSheetMenu} >
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='flex justify-start' >Menu</SheetTitle>
                        <SheetDescription>
                            {
                                session
                                    ?
                                    <div className='flex gap-3' >
                                        <Avatar className='border-2 border-primary' >
                                            <AvatarImage src={session?.user?.image ?? ''} />
                                        </Avatar>
                                        <div className="text-left text-white" >
                                            <h1 className='text-base font-bold' >{session?.user?.name}</h1>
                                            <h1 className='text-xs font-normal' >{session?.user?.email}</h1>
                                        </div>
                                    </div>
                                    :
                                    <SheetClose className='w-full' >
                                        <Button className='flex justify-between px-0 py-3 items-center w-full hover:no-underline' variant='link' onClick={() => setOpenDialogLogin(true)} >
                                            <span className='text-white text-lg' >Olá, faça seu login</span>
                                            <div className='bg-primary text-white p-2 rounded-lg'>
                                                <IoExitOutline size={20} />
                                            </div>
                                        </Button>
                                    </SheetClose>
                            }
                            <Separator className='my-3' />

                            <div className='flex flex-col gap-3' >
                                <div className='text-white flex items-center gap-4 bg-primary rounded-lg px-3 py-3' >
                                    <FaHome size={18} />
                                    <span className='text-sm' >Ínicio</span>
                                </div>
                                <div className='text-white flex items-center gap-4 bg- rounded-lg px-3 py-3' >
                                    <FaCalendarAlt size={18} />
                                    <span className='text-sm' >Agendamento</span>
                                </div>
                            </div>

                            <Separator className='my-3' />

                            <div className='flex flex-col gap-4 px-3' >
                                {
                                    quickSearchOptions.map((item) => (
                                        <div key={item.imageUrl} className="text-white flex gap-4 items-center py-1" >
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                height={18}
                                                width={18}
                                            />
                                            <span className='text-sm' >{item.title}</span>
                                        </div>
                                    ))
                                }
                            </div>

                            <Separator className='my-3' />

                            {
                                session
                                &&
                                <Button disabled={loadingSignout} variant='ghost' onClick={handleSignout} className='w-full justify-start flex gap-4 items-center px-3 text-white' >
                                    {
                                        loadingSignout
                                            ?
                                            <AiOutlineLoading3Quarters size={18} className="animate-spin" />
                                            :
                                            <IoExitOutline size={18} />
                                    }
                                    <span className='text-sm' >Sair da conta</span>
                                </Button>

                            }

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Dialog_Login openDialogLogin={openDialogLogin} setOpenDialogLogin={setOpenDialogLogin} />
        </>
    );
}

export default Menu_Mobile;