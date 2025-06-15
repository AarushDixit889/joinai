"use client"
import React, { useEffect } from 'react'
import { authClient } from '@/auth-client';
import { redirect } from 'next/navigation';
import SideBar from '@/components/shared/SideBar';
import MobileNavBar from '@/components/shared/MobileNavBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = authClient.useSession();
    useEffect(() => {
        if (!session) {
            redirect("/sign-in");
        }
    }
    , [session]);
    return (
        <div className='flex flex-col md:flex-row'>
            <MobileNavBar />
            <SideBar />
            {children}
        </div>
    )
}

export default RootLayout;