import { Loader2Icon, LoaderIcon } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
    return (
        <div className='flex items-center justify-center '>
            <Loader2Icon size={70} color='gray' className=' animate-spin' />
        </div>
    )
}

export default PageLoader