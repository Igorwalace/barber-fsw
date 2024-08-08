import React from 'react'

interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <div>
            <h1 className='lg:text-xl text-sm font-bold' >{title}</h1>
        </div>
    )
}

export default Title