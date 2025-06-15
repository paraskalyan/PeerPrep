import React from 'react'
import { Sidebar, SidebarHeader, SidebarGroup, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './ui/sidebar'
import { Home, User, Settings, MessageCircle, Bell } from 'lucide-react'
import { Link } from 'react-router'

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: User,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Chat",
        url: "#",
        icon: MessageCircle,
    },
    {
        title: "Notifications",
        url: "#",
        icon: Bell,
    },
]

const AppSidebar = () => {
    return (
        <Sidebar className=' hidden lg:block'>
            <SidebarHeader>Codio Social</SidebarHeader>
            <SidebarContent className=' py-5 border-t'>
                <SidebarMenu>
                    {items.map((item) => {
                        return (
                            <SidebarMenuItem key={item.title}>
                                <Link to={item.url} className='flex items-center gap-3'>
                                    <SidebarMenuButton >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                Footer
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar