'use client'
//react-icons
import { IoExitOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

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

//react-next
import { useState } from "react";

//pages
import Dialog_Login from "./_dialog-login";


const Menu_Mobile = () => {

    const [openSheetMenu, setOpenSheetMenu] = useState(false)
    const [openDialogLogin, setOpenDialogLogin] = useState(false)

    return (
        <>
            <Button variant="link" size="icon" onClick={() => setOpenSheetMenu(true)} ><FiMenu color='white' size={20} /></Button>
            <Sheet open={openSheetMenu} onOpenChange={setOpenSheetMenu} >
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='flex justify-start' >Menu</SheetTitle>
                        <SheetDescription>
                            <SheetClose className='flex justify-between py-3 items-center' >
                                <span className='text-white text-lg' >Olá, faça seu login</span>
                                <Button onClick={() => setOpenDialogLogin(true)} className='bg-primary text-white p-2 rounded-lg' >
                                    <IoExitOutline size={20} />
                                </Button>
                            </SheetClose>
                            {/* <Separator className='my-5' /> */}
                            <div>

                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <Dialog_Login openDialogLogin={openDialogLogin} setOpenDialogLogin={setOpenDialogLogin} />
        </>
    );
}

export default Menu_Mobile;