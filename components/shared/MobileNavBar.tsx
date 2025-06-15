import Image from 'next/image'
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { DollarSign, MenuIcon } from 'lucide-react'
import { navLinks } from '@/constants'
import Link from 'next/link'

const MobileNavBar = () => {
    return (
        <div className='md:hidden flex justify-between py-1 px-2 mb-5'>
            <div className="flex gap-x-1 items-center">
                <Image
                    src={"/logo.svg"}
                    alt='logo'
                    width={25}
                    height={25}
                />
                <h1 className="text-xl">JoinAI</h1>
            </div>

            <Sheet>
                <SheetTrigger>
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent side='bottom' className='rounded-t-lg'>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mb-15 mt-5 flex flex-col p-4 justify-center">
                        {
                            navLinks.map((link, index) => (
                                <Link href={link.link} key={index} className="flex flex-row gap-x-2 px-2 py-3 hover:bg-secondary rounded-lg">
                                    <link.icon />
                                    <span className="text-sm">{link.name}</span>
                                </Link>
                            ))
                        }
                        <Link href="/buy-credits" className="flex flex-row gap-x-2 px-2 py-3 hover:bg-secondary rounded-lg">
                            <DollarSign />
                            <span className="text-sm">Credits: </span>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavBar