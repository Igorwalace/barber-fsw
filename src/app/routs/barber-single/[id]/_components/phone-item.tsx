'use client'

import React, { useState } from 'react'

//shadcn
import { Button } from '@/app/_services/components/ui/button'

//lucide
import { SmartphoneIcon } from 'lucide-react'

interface PhoneProps {
    phone: string
}

const Phone_Item = ({ phone }: PhoneProps) => {

    const [copied, setCopied] = useState(false)

    const handleCopyPhoneClick = (phone: string) => {
        setCopied(true)
        navigator.clipboard.writeText(phone)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <div className="flex justify-between" key={phone}>
            
            <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <p className="text-sm">{phone}</p>
            </div>
            
            <Button
                variant="secondary"
                size="sm"
                onClick={() => handleCopyPhoneClick(phone)}
            >
                {
                    copied ? 'Copiado' : 'Copiar' 
                }
            </Button>
        </div>
    )
}

export default Phone_Item