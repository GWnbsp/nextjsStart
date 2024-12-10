import React from 'react'
import homeImage from '@/public/home.png'
import Hero from '@/components/hero'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "homePage",
};

export default function page() {
  return (
    <Hero imgUrl={homeImage} altText={'出错了'} msg={"homePage"} />
  )
}
