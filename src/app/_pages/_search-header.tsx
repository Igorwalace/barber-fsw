'use client'
//pages
import FormSearch from "./components/_form-search";

//react-next
import { usePathname } from "next/navigation";

const SerachHeader = () => {

    const pathname = usePathname()
    console.log(pathname)

    return (
        <>
            <div className={`${pathname === '/' && 'lg:hidden'} lg:block hidden w-2/5`} >
                <FormSearch />
            </div>
        </>
    );
}

export default SerachHeader;