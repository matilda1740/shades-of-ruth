import { AddLocationOutlined, HomeOutlined } from '@material-ui/icons'
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
            <DashboardLinks href="/admin/add/locations">
                <AddLocationOutlined />
                <p>Add New Location</p>                    
            </DashboardLinks>

        </div>
    </SidebarCard>
  )
}
