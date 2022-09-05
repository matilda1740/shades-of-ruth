import React from 'react'
import AdminNavBar from '../ReusableComponents/AdminNavBar'
import { AdminWrapper, ModuleSection } from './admin.style'
// import Branches from './Modals/Branches'
import SidebarLeft from './SidebarLeft'
import { useAuth } from '../../Hooks/firebase/userHooks'
import { useHistory } from 'react-router'

export default function Admin({content}) {
  const history = useHistory();

  const { currentUser, logoutUser} = useAuth(); 
  console.log(currentUser)

  const handleLogout = () => { logoutUser(); history.push("/")};
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
