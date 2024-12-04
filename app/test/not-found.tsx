export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center">
                    <div className="relative">
                        <svg
                            className="w-48 h-48 mx-auto"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="11" stroke="#E5E7EB" strokeWidth="2" />
                            <path
                                d="M8 8L16 16M16 8L8 16"
                                stroke="#6B7280"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">
                        test页面未找到
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        抱歉，我们找不到您要访问的页面。
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
                        >
                            返回首页
                        </a>
                        <a
                            href="/"
                            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        >
                            联系我们
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}