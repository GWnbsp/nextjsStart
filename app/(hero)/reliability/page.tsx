import React from 'react'
import reliabilityImage from '@/public/reliability.png'
import Hero from '@/components/hero'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Reliability",
    description: "ReliabilityPage",
};
export default function ReliabilityPage() {
    return (
        <Hero imgUrl={reliabilityImage} altText={'出错了'} msg={"ReliabilityPage"} />
    )
}
