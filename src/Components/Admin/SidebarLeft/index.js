import { AddLocationOutlined, CategoryOutlined, GroupOutlined, HomeOutlined, PublicOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardLinks, SidebarCard } from './sidebarleft.style'

export default function SidebarLeft() {
  return (
    <SidebarCard>
        <div className="logo_container">
            <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
        </div>

        <div className="dashboard_sectionOne">
            <DashboardLinks href="/admin">
                <HomeOutlined />
                <p>Dashboard</p>                    
            </DashboardLinks>   
            <DashboardLinks href="/admin/users">
                <GroupOutlined />
                <p>Customers</p>                    
            </DashboardLinks>                   
            <DashboardLinks href="/admin/products">
                <CategoryOutlined />
                <p>Products</p>                    
            </DashboardLinks>

            <DashboardLinks href="/admin/branches">
                <AddLocationOutlined />
                <p>Branches</p>                    
            </DashboardLinks> 

            <DashboardLinks href="/admin/locations">
                <AddLocationOutlined />
                <p>Delivery Locations</p>                    
            </DashboardLinks>  

            <DashboardLinks href="/">
                <PublicOutlined />
                <p>Website</p>                    
            </DashboardLinks>             
        </div>
    </SidebarCard>
  )
}
