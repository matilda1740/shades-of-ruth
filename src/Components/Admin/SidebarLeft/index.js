import { CategoryOutlined, GroupOutlined, HomeRounded, LaptopMacRounded, ScoreRounded, SignalCellularAltRounded } from '@mui/icons-material'
import React from 'react'
import CustomAccordion, { AccordionWrapper } from '../../ReusableComponents/Accordion'
import { DashboardLinks, SidebarCard } from './sidebarleft.style'
import { PushPinRounded, ShoppingCartRounded, DescriptionRounded } from "@mui/icons-material"
export default function SidebarLeft() {
  return (
    <SidebarCard>
        <div className="logo_container">
            <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
        </div>

        <div className="dashboard_sectionOne">

            <AccordionWrapper>
                <DashboardLinks href="/admin">
                    <HomeRounded />
                    <p>Overview</p>                    
                </DashboardLinks>              
                <DashboardLinks href="/admin">
                    <SignalCellularAltRounded />
                    <p>Analytics</p>                    
                </DashboardLinks> 
                <DashboardLinks href="/admin">
                    <ScoreRounded />
                    <p>Finance</p>                    
                </DashboardLinks> 
                <DashboardLinks href="/">
                    <LaptopMacRounded />
                    <p>Home Website</p>                    
                </DashboardLinks> 
            </AccordionWrapper>


            <AccordionWrapper>
                <CustomAccordion 
                    icon={<GroupOutlined />}
                    label={"Users"}
                    children={
                    <>
                        <DashboardLinks className="accordion" href="/admin/users"><p>List</p>                    
                        </DashboardLinks>  
                        <DashboardLinks className="accordion" href="/admin/users/details"><p>Details</p>                    
                        </DashboardLinks> 
                    </>}
                />
                <CustomAccordion 
                    icon={<CategoryOutlined />}
                    label={"Products"}
                    children={
                    <>
                        <DashboardLinks href="/admin/products">
                            <p>List</p>                    
                        </DashboardLinks> 
                        <DashboardLinks href="/admin/products/details">
                            <p>Details</p>                    
                        </DashboardLinks> 
                    </>}
                />
                <CustomAccordion 
                    icon={<PushPinRounded/>}
                    label={"Locations"}
                    children={
                    <>
                        <DashboardLinks href="/admin/locations">
                            <p>List</p>                    
                        </DashboardLinks> 
                        <DashboardLinks href="/admin/locations/:id">
                            <p>Create</p>                    
                        </DashboardLinks> 
                    </>}
                />

                <CustomAccordion 
                icon={<ShoppingCartRounded/>}
                    label={"Orders"}
                    children={
                    <>
                        <DashboardLinks href="/admin/orders">
                            <p>List</p>                    
                        </DashboardLinks> 
                        <DashboardLinks href="/admin/orders/details">
                            <p>Details</p>                    
                        </DashboardLinks> 
                    </>}
                />
                <CustomAccordion 
                    icon={<DescriptionRounded/>}
                    label={"Invoices"}
                    children={
                    <>
                        <DashboardLinks href="/admin/products">
                            <p>List</p>                    
                        </DashboardLinks> 
                        <DashboardLinks href="/admin/users">
                            <p>Details</p>                    
                        </DashboardLinks> 
                    </>}
                />

            </AccordionWrapper>

    

            {/* <DashboardLinks href="/admin/branches">
                <AddLocationOutlined />
                <p>Branches</p>                    
            </DashboardLinks> 

            <DashboardLinks href="/admin/locations">
                <AddLocationOutlined />
                <p>Delivery Locations</p>                    
            </DashboardLinks>   */}
            
        </div>
    </SidebarCard>
  )
}
