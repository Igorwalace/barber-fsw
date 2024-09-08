'use server'

import { auth } from "../auth/auth"

export const GetSession = async () => {
    return await auth()
}