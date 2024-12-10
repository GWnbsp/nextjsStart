import React from 'react'
import performanceImage from '@/public/performance.png'
import Hero from '@/components/hero'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Performance",
    description: "PerformancePage",
};
export default function PerformancePage() {
    return (
        <Hero imgUrl={performanceImage} altText={'出错了'} msg={"PerformancePage"} />
    )
}
