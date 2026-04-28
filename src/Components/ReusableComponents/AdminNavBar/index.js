import React from 'react';
import styled from 'styled-components';
import {Avatar, Badge} from '@mui/material';
import {blue} from '@mui/material/colors'
import { Notifications } from '@mui/icons-material';
import { PowerSettingsNewRounded } from '@mui/icons-material';

export const AdminNavBarWrapper = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -40px;
    padding: 0.5rem 0.5rem;

    
    div { display: flex; align-items: center;}

        
    svg { color : #f4f4f4; :hover{ cursor: pointer;}}
    .navbar_left {
        justify-content: flex-start;
        width: 50px;
    }
    .navbar_right {
        justify-content: flex-end;
        width: 200px;
        * {
            margin: 0px 8px;
        }
    }
`;

export default function AdminNavBar({handleLogout}) {
    return (
        <AdminNavBarWrapper>
            <div className="navbar_left"></div>
            <div className="navbar_right">
            <Badge sx={{ marginTop: 1}} badgeContent={17} color="error"><Notifications /></Badge>
            <Avatar
                sx={{ bgcolor: blue[500], width: 32, height: 32 }}
                alt="Profile"
                src="/images/home_bg2.png" 
            />  
            <PowerSettingsNewRounded onClick={handleLogout} />              
            </div>
        </AdminNavBarWrapper>
    );
}