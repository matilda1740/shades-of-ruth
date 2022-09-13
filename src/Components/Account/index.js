import React, { useState } from 'react'
import { ModuleStyle } from '../Admin/ViewPages/Products';
import SectionHeading from '../ReusableComponents/SectionHeading';
import { AccountModuleStyle, SectionWrapper } from './account.style';
import Sidebar from './Sidebar';
import AccountProfile from './Profile'
import AccountOrders from './Orders'
import AccountCart from './Cart'
import AccountWishlist from './Wishlist'

export function Account({userType}) {

    const [ accountModule, setAccountModule] = useState("profile");
    const handleAccountModule = (input) => () => setAccountModule(input);

    return (
    <ModuleStyle>
        <SectionHeading
        title="Account Details"
        type="account"
        btnHidden={true}
        />  
        <SectionWrapper className={userType}>
            <Sidebar accountModule={accountModule} handleAccountModule={handleAccountModule}/>
            <AccountModuleStyle>
                { 
                    accountModule === "orders" 
                    ? <AccountOrders />
                    : accountModule === "cart"
                    ? <AccountCart />
                    : accountModule === "wishlist"
                    ? <AccountWishlist />
                    : <AccountProfile />
                }
            </AccountModuleStyle>
        </SectionWrapper>
    </ModuleStyle>
    );
}