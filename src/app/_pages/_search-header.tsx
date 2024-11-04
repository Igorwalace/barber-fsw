'use client'
//pages
import FormSearch from "./components/_form-search";

//react-next
import { usePathname } from "next/navigation";

const SerachHeader = () => {

    const pathname = usePathname()

    return (
        <>
            <div className={`${pathname === '/' || pathname === '/booking' && 'lg:hidden'} lg:block hidden w-2/5`} >
                <FormSearch />
            </div>
        </>
    );
}

export default SerachHeader;