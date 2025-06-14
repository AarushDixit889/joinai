"use client"
import React from 'react'
import { authClient } from '@/auth-client';
import { redirect } from 'next/navigation';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    // This is the root layout for the application
    const { data: session } = authClient.useSession();
    if (session) {
        redirect('/dashboard');
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default RootLayout;