import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Separator } from '../components/ui/separator'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const UserProfile = () => {
    return (
        <div className='min-h-screen p-5 flex items-center justify-center'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='col-span-1'>
                    <Card>
                        <CardHeader className=' w-full flex flex-col items-center'>
                            <h1 className='text-3xl font-bold'>Paras Kalyan</h1>
                            <p>@paraskalyan</p>

                        </CardHeader>
                        <CardContent className=''>
                            <img className='rounded-full ring-8 ring-[#e6e6e6]' width={250} src='https://unavatar.io/github/1stevengrant' />
                        </CardContent>
                    </Card>
                </div>

                <div className='h-full col-span-2'>
                    <Card>
                        <CardHeader className=' text-lg'>Bio & other details</CardHeader>
                        <CardContent>
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2='Intermediate' />
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2='Intermediate' />
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2='Intermediate' />
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2='Intermediate' />
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2='Intermediate' />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-3'>
                    <Card>
                        <CardHeader className='text-lg'>
                            Social Media
                        </CardHeader>
                        <CardContent className='flex gap-7'>
                            <FaGithub size={30} />
                            <FaTwitter size={30} />
                            <FaLinkedin size={30} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}


const BioDetail = ({ title1, des1, title2, des2 }) => {
    return (
        <>
            <div className='flex items-center justify-between my-2  '>
                <div>
                    <p className='text-sm text-[#8b8b8b]'>{title1}</p>
                    <p className='font-semibold'>{des1}</p>
                </div>
                <div>
                    <p className='text-sm text-[#8b8b8b]'>{title2}</p>
                    <p className='font-semibold'>{des2}</p>
                </div>
            </div>
            <Separator />
        </>
    )
}

export default UserProfile