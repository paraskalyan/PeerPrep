import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'


const Navbar = () => {
    const { getToken } = useAuth();

    const callApi = async () => {
        const token = await getToken();
        console.log(token)
    }

    return (

        <nav className='w-full bg-[#f8f8f8] flex items-center justify-between py-3 px-3'>
            <div>LOGO</div>
            <div>
                <SignedOut>

                    <SignInButton />

                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>

    )
}

export default Navbar