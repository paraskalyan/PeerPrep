import { SignIn, SignUp } from '@clerk/clerk-react'
import React from 'react'
import { LoginForm } from '../components/login-form'

const Signin = () => {
    return (
        <div className='w-full flex items-center justify-center pt-10 '>

            {/* <LoginForm className='mt-15' /> */}
            <SignIn />
        </div>
    )
}

export default Signin