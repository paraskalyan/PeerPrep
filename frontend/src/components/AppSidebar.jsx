import React from 'react'
import { Sidebar, SidebarHeader, SidebarGroup, SidebarContent, SidebarFooter } from './ui/sidebar'
const AppSidebar = () => {
    return (
        <Sidebar className=' hidden lg:block'>
            <SidebarHeader>Codio Social</SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar