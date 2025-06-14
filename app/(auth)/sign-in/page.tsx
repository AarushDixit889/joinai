"use client";
import { authClient } from '@/auth-client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SignIn = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    const signInToAccount = async () => {
        try {
            setIsLoading(true);
            setError("");

            const { data, error } = await authClient.signIn.email(formData);
            if (error) {
                setError(error.message || "An error occurred while signing in.");
                return;
            }
            if (data) {
                // Handle successful sign-in, e.g., redirect to dashboard or show a success message
                console.log("Sign-in successful:", data);
                router.replace("/dashboard");
                
            }
        } catch (error) {
            console.error("Error signing in:", error);
            // Handle error (e.g., show a notification)
        } finally {
            setIsLoading(false);
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
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <div className="flex flex-col gap-4 w-full max-w-[300px]">
                <Input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <Input placeholder="Password" type='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button className="w-full" size={"sm"} onClick={signInToAccount}>
                    {
                        isLoading ? "Signing in..." : <><ArrowRight className="mr-2" /> Sign In</>
                    }
                </Button>
                <p className="text-sm text-muted-foreground">
                    Don't have an account? <Link href="/sign-up" className='text-primary'>Sign up</Link>
                </p>
            </div>
        </div>

    )
}

export default SignIn