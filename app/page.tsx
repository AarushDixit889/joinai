"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const page = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="border rounded-lg overflow-hidden p-4 min-h-[50%]">

                <div className="flex flex-col justify-center items-center min-h-full">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={250}
                        height={250}
                        className='mb-4'
                    />
                    <h1 className="text-2xl font-bold mb-4">JoinAI</h1>
                    <Link href="/sign-in">
                        <Button variant="outline" className="w-full max-w-[300px]" size={"sm"}>
                            Get Started With JoinAI
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page