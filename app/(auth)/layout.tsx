"use client";
import { authClient } from '@/auth-client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const { data: session } = authClient.useSession();
    useEffect(() => {
        if (session) {
            redirect("/dashboard");
        }
    }
    , [session]);
    return (
        <div className="grid place-items-center h-screen">
            <div className="border rounded-lg overflow-hidden grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-1 w-full max-w-[50vw]">
                <div className="p-5 hidden md:block">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center items-center min-h-full pt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout