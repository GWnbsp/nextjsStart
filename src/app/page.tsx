import React from 'react';
import Image from 'next/image';
import { photos } from "@/data";
import Link from "next/link"
export default function Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {photos.map(item => (
            <Link key={item.id} href={`/photos/${item.id}`} className="group">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{item.alt}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}