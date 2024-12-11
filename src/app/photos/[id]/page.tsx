"use client"
import React from 'react'
import Image from 'next/image'
import { photos } from "@/data"

export default function Page({ params }: { params: { id: string } }) {
    // const photo = photos.find(item => item.id === params.id)
    const photo = photos.find((item) => {
        return item.id === params.id
    })
    if (!photo) {
        return <div className="container mx-auto pt-8">商品未找到</div>
    }

    return (
        <div className='container mx-auto pt-8'>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <Image
                            width={500}
                            height={500}
                            src={photo.src}
                            alt={photo.alt}
                            className="rounded-lg shadow-lg"
                            priority={true}
                            quality={90}
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">{photo.alt}</h1>
                        <p className="text-xl text-red-600 mb-4">
                            ¥{photo.price.toLocaleString()}
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            加入购物车
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}