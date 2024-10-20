'use client'
//shadcn
import { Button } from "@/app/_services/components/ui/button";
import { Input } from "@/app/_services/components/ui/input";

//react-next
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

//react-icons
import { CiSearch } from "react-icons/ci";

const FormSearch = () => {

    const [text, setText] = useState('')
    const router = useRouter()

    const searchParams = (e: any) => {
        e.preventDefault()
        router.push(`/search/${text}`)
    }

    return (
        <>
            <form onSubmit={searchParams} className='flex gap-1 w-full' >
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    className='outline-none'
                    placeholder="Buscar Barbearias"
                />
                <Button asChild variant="outline" size="icon" className='bg-[#8162FF] px-2'>
                    <Link href={`/search/${text}`} >
                        <CiSearch size={20} className='font-extrabold' />
                    </Link>
                </Button>
            </form>
        </>
    );
}

export default FormSearch;