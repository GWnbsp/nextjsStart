import React from 'react'
import Hero from '@/components/hero'
import scaleImage from '@/public/scale.png'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Scale",
    description: "ScalePage",
};
export default function ScalePage() {
    return (
        <Hero imgUrl={scaleImage} altText={'出错了'} msg={"ScalePage"} />
    )
}
