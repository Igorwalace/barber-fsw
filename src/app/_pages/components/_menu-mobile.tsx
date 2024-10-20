'use client'
//react-icons
import { IoExitOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaCalendarAlt } from "react-icons/fa";

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
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

//pages
import { quickSearchOptions } from "@/app/_constants/_search-constant";
import Dialog_Login from "./_dialog-login";

//contexts
import useAppUtils from "@/app/_contexts/utils";

const Menu_Mobile = ({ session }: any) => {

    const pathname = usePathname()

    const { openSheetMenu, setOpenSheetMenu, setOpenDialogLogado, setOpenDialogLogin } = useAppUtils()

    const handleSignout = () => setOpenDialogLogado(true)
    const handleSheetClose = () => setOpenSheetMenu(false)

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
                                <Button onClick={handleSheetClose} variant='ghost' className={`${pathname === '/' && 'bg-primary'} justify-start items-center px-3 py-3`} asChild >
                                    <Link href='/' className='text-white flex gap-4 ' >
                                        <FaHome size={18} />
                                        <span className='text-sm' >Ínicio</span>
                                    </Link>
                                </Button>
                                {
                                    session?.user
                                        ?
                                        <Button onClick={handleSheetClose} variant='ghost' className={`${pathname === '/booking' && 'bg-primary'} justify-start items-center px-3 py-3`} asChild >
                                            <Link href='/booking' className='text-white flex gap-4 ' >
                                                <FaCalendarAlt size={18} />
                                                <span className='text-sm' >Agendamentos</span>
                                            </Link>
                                        </Button>
                                        :
                                        <Button onClick={handleSheetClose} disabled={!session?.user} variant='ghost' className={`${pathname === '/booking' && 'bg-primary'} justify-start items-center px-3 py-3 text-white flex gap-4 `} >
                                            <FaCalendarAlt size={18} />
                                            <span className='text-sm' >Agendamentos</span>
                                        </Button>
                                }
                            </div>

                            <Separator className='my-3' />

                            <div className='flex flex-col gap-4' >
                                {
                                    quickSearchOptions.map((item) => (
                                        <Button onClick={handleSheetClose} variant='ghost' key={item.imageUrl} className='py-1 px-3 justify-start items-center' asChild >
                                            <Link href='/' className="text-white flex gap-4 items-center" >
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={item.title}
                                                    height={18}
                                                    width={18}
                                                />
                                                <span className='text-sm' >{item.title}</span>
                                            </Link>
                                        </Button>
                                    ))
                                }
                            </div>


                            {
                                session
                                &&
                                <>
                                    <Separator className='my-3' />
                                    <SheetClose className='w-full' >
                                        <Button variant='ghost' onClick={handleSignout} className='w-full justify-start flex gap-4 items-center px-3 text-white' >
                                            <IoExitOutline size={18} />
                                            <span className='text-sm' >Sair da conta</span>
                                        </Button>
                                    </SheetClose>
                                </>
                            }

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Dialog_Login />
        </>
    );
}

export default Menu_Mobile;