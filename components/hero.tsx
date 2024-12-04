import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HeroProps {
    imgUrl: StaticImageData,
    altText: string,
    msg: string
}
export default function Hero({ imgUrl, altText, msg }: HeroProps) {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 -z-10'>
                <Image src={imgUrl} alt={altText} fill style={{ objectFit: "cover" }} />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900'></div>
            </div>
            <div className='flex justify-center pt-48'>
                <h1 className='text-6xl'>{msg}</h1>
            </div>
        </div>
    )
}
