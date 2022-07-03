import React from 'react'
import { AdminWrapper, ModuleSection } from './admin.style'
// import Branches from './Modals/Branches'
import SidebarLeft from './SidebarLeft'

export default function Admin({content}) {
  return (
    <AdminWrapper>
        <SidebarLeft/>
        <ModuleSection>
            {content}
        </ModuleSection>
    </AdminWrapper>
  )
}
