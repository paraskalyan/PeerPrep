import { SignedIn, SignedOut, SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router';


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

                    {/* <SignInButton forceRedirectUrl='/' />
                    <SignUpButton forceRedirectUrl='/signin' /> */}
                    <Link to='/signin'>
                        <Button variant='outline' className='mx-5'>Sign in</Button>
                    </Link>
                    <Link to='/signup'>
                        <Button>Sign up</Button>
                    </Link>


                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>

    )
}

export default Navbar