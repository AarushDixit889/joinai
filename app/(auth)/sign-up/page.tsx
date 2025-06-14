"use client";
import { authClient } from '@/auth-client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const createAccount = async () => {
        try {
            // Add your account creation logic here
            const { data, error } = await authClient.signUp.email({ ...formData, callbackURL: "/dashboard" }, {
                onRequest: (ctx) => {
                    setLoading(true);
                },
                onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                    setLoading(false);
                    router.replace("/sign-in");
                    // Optionally, you can show a success message or perform other actions
                },
                onError: (ctx) => {
                    // display the error message
                    setLoading(false);
                    setError(ctx.error.message);
                    console.error("Error during sign up:", ctx.error);
                },
            });
        } catch (error) {
            console.error("Error creating account:", error);
        }
    }

    return (
        <div className="flex flex-col items-center mb-4">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={50}
                className='mr-2 block md:hidden'
            />
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <div className="flex flex-col gap-4 w-full max-w-[300px]">
                <Input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <Input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Input placeholder="Password" type='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <span className="text-sm text-red">{error}</span>
                <Button className="w-full" size={"sm"} onClick={createAccount} >
                    {
                        loading ? "Creating Account..." : "Create Account"
                    }
                </Button>
                <p className="text-sm text-muted-foreground">
                    Already have an account? <Link href="/sign-in" className='text-primary'>Sign in</Link>
                </p>
            </div>
        </div>

    )
}

export default SignUp