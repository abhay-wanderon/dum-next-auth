import { Button } from '@/components/ui/button'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'

const LoginPage = () => {

    const router = useRouter()
    const [isRegistering, setIsRegistering] = useState(false)

    const handleProviderLogin = (type: "google" | "github") => {
        setIsRegistering(true)
        signIn(type, {
            redirect: false
        }).then((callBack) => {
            if (callBack?.ok) {
                router.push("/conversations")
                window.alert("Register successful!")
            }
            if (callBack?.error) {
                window.alert(String(callBack?.error))
            }
        }).finally(() => {
            setIsRegistering(false)
        })
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-muted-foreground">Choose your preferred sign-in method</p>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-sm">
                <Button disabled={isRegistering} onClick={() => handleProviderLogin("google")} variant="outline" className="flex items-center justify-center gap-2">
                    <Image src="/google.webp" width={24} height={24} alt="Google" />
                    Sign in with Google
                </Button>
                <Button disabled={isRegistering} onClick={() => handleProviderLogin("github")} variant="outline" className="flex items-center justify-center gap-2">
                    <Image src="/github.svg" width={24} height={24} alt="GitHub" />
                    Sign in with GitHub
                </Button>
            </div>
        </div>
    )
}

export default LoginPage