
"use client"
import { useState } from 'react';
export default function DashboardTemplate({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="border-2 border-dashed border-blue-400 p-4  mx-auto mt-4">
            <div>
                DashboardTemplate  {count}
            </div>
            <button className='bg-slate-500 text-white my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
            {children}


            <code>
                Next.js 中 template.tsx 的核心概念：

                1. template.tsx 的本质：
                - 是一个特殊的布局文件
                - 在每次路由切换时都会重新渲染
                - 会重置所有状态
                - 会重新创建 DOM 元素
                2. 与 layout.tsx 的主要区别：
                - layout 在路由切换时保持状态且不重新渲染
                - template 在每次路由切换时都重新渲染并重置状态
                - layout 适合持久性的UI元素（如导航栏）
                - template 适合需要重新初始化的UI元素

                3. 主要使用场景：
                - 页面切换动画
                - 加载状态展示
                - 需要重置的计数器或表单
                - 第三方库的重新初始化
                - 进入/退出动画效果

                4. 注意事项：
                - 不要在 template 中放置持久性UI组件
                - 仅用于需要重新渲染的内容
                - 可以和 layout 配合使用
                - 支持嵌套使用

                5. 适用场景：
                - 动画效果
                - 临时状态管理
                - 页面转场效果
                - 需要频繁重置的功能

                template.tsx 主要解决了在路由切换时需要重新初始化某些UI组件的场景，它与 layout.tsx 互补，共同构建了 Next.js 的页面结构系统。
            </code>
        </div>

    );
}
