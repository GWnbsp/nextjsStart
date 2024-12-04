"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import type { HeaderProps } from '@/types/header'

export default function Header({ headerItems }: HeaderProps) {
    const pathname = usePathname()

    // 检查当前路径是否应该显示header
    const shouldShowHeader = headerItems.some(item => item.path === pathname) || pathname === '/'
    // 或者 
    // const shouldShowHeader = ['/', ...headerItems.map(item => item.path)]

    // 如果当前路径不在headerItems中且不是首页，则不渲染组件
    if (!shouldShowHeader) {
        return null
    }

    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="text-xl space-x-4">
                    {headerItems.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`transition-colors duration-200 hover:text-blue-400 ${pathname === link.path ? 'text-blue-500' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}