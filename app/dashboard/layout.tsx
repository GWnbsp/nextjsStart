
"use client"
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
export default function DashboardPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  interface NavLink {
    name: string;
    path: string;
  }
  const [count, setCount] = useState<number>(0)
  const pathname = usePathname()
  // 为什么console打印两次? 解： 默认开启严格模式 模拟历经卸载和重新挂载 只存在开发模式存在 配置开关在nextconf
  console.log(pathname);
  // 实现路由一致高亮 
  const linkData: NavLink[] = [
    {
      name: "About",
      path: "/dashboard/about"
    },
    {
      name: "Settings",
      path: "/dashboard/settings"
    }
  ]
  return (
    <div className="border-2 border-dashed border-blue-400 p-4 w-1/2 mx-auto mt-4">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {/* 两种写法map */}
        {/* {linkData.map((link) => (
          <Link
            key={link.path}
            className={link.path === pathname ? 'text-purple-500' : ''}
            href={link.path}
          >
            {link.name}
          </Link>
        ))} */}
        {
          linkData.map((link) => {
            return <Link
              key={link.path}
              className={link.path === pathname ? 'text-purple-500' : ''}
              href={link.path}
            >
              {link.name}
            </Link>
          })
        }
      </div>
      <div>
        Dashboard Layout {count}
      </div>
      <button
        className='bg-slate-500 text-white my-4 rounded-md'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>

  );
}
