import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Separator } from '../components/ui/separator'
import PageLoader from '../components/PageLoader'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import { useParams } from 'react-router'
const UserProfile = () => {

    const { profileId } = useParams()
    const { getToken } = useAuth();

    const { data: userData, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/${profileId}`, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            });
            console.log(res.data)
            return res.data;
        },
    })

    if (isLoading) return <PageLoader />

    return (
        <div className='min-h-screen p-5 flex items-center justify-center'>
            <div className='grid grid-cols-3 grid-rows-2 gap-5'>
                <div className='row-span-2'>
                    <Card>
                        <CardHeader className=' w-full flex flex-col items-center'>
                            <h1 className='text-3xl font-bold'>{userData.name}</h1>
                            <p>@paraskalyan</p>

                        </CardHeader>
                        <CardContent className=''>
                            <img className='rounded-full ring-8 ring-[#e6e6e6]' width={250} src={userData.image} />
                        </CardContent>
                    </Card>
                </div>

                <div className='h-full col-span-2'>
                    <Card>
                        <CardHeader className=' text-lg'>Bio & other details</CardHeader>
                        <CardContent>
                            <h6 className='font-semibold'>{userData.bio}</h6>
                            <BioDetail title1='My Role' des1='Frontend Developer' title2='My Experience' des2={userData.experienceLevel} />
                            <BioDetail title1='Availability' des1={userData.availability ? <Badge>Avaliable</Badge> : <Badge>Not Available</Badge>} title2='Tech Stack' des2={userData.techStack} />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2'>
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