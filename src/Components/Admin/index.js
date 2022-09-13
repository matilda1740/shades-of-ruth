import React from 'react'
import AdminNavBar from '../ReusableComponents/AdminNavBar'
import { AdminWrapper, ModuleSection } from './admin.style'
// import Branches from './Modals/Branches'
import SidebarLeft from './SidebarLeft'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'

export default function Admin({content}) {
  const navigate = useNavigate();

  const { currentUser, logoutUser} = useAuth(); 
  console.log(currentUser)

  const handleLogout = () => { logoutUser(); navigate("/")};
  return (
    <AdminWrapper>
        <SidebarLeft/>
        <ModuleSection>
          <AdminNavBar handleLogout={handleLogout}/>
            {content}
        </ModuleSection>
    </AdminWrapper>
  )
}
