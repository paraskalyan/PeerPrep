import { SignIn, SignUp } from '@clerk/clerk-react'
import React from 'react'
import { LoginForm } from '../components/login-form'

const Signin = () => {
    return (
        <div className='container mx-auto max-w-3xl '>

            <LoginForm className='mt-15' />
        </div>
    )
}

export default Signin