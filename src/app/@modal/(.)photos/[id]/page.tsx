"use client"
import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { photos } from "@/data"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
    const photo = photos.find(item => item.id === params.id)
    const router = useRouter()
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            router.back()
        }
    }, [router])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    if (!photo) {
        return <div className="container mx-auto pt-8">商品未找到</div>
    }

    const modalContent = (
        <div
            className="relative z-50"
            role="dialog"
            aria-modal="true"
            onClick={() => router.back()}
        >
            <div className="fixed inset-0 bg-gray-500/80 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div
                        className="relative bg-white rounded-lg shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute right-2 top-2 z-10 rounded-full bg-gray-100/80 p-2 text-gray-600 hover:bg-gray-200 focus:outline-none"
                            onClick={() => router.back()}
                            aria-label="关闭"
                        >
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={500}
                                height={500}
                                priority
                                className="max-h-[85vh] w-auto object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return mounted ? createPortal(modalContent, document.body) : null
}