"use client"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600 mt-4">页面未找到</p>
                <p className="text-gray-500 mt-2">抱歉，我们找不到您要访问的页面。</p>
                <div className="mt-6 space-y-4">
                    <button
                        onClick={() => router.back()}
                        className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        返回上一页
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        返回首页
                    </button>
                </div>
            </div>
        </div>
    )
}