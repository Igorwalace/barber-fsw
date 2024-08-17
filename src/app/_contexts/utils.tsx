'use client'
import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppUtils({ children }: {
    children: React.ReactNode;
}) {
    const [openSheetMenu, setOpenSheetMenu] = useState(false)
    const [openDialogLogado, setOpenDialogLogado] = useState(false)

    return (
        <AppContext.Provider value={{ openSheetMenu, setOpenSheetMenu, openDialogLogado, setOpenDialogLogado }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppUtils() {
    return useContext(AppContext)
}