import React from 'react'

import Loader from '../../ReusableComponents/Loader';
import SectionHeading from '../../ReusableComponents/SectionHeading';

export function Home({btnHidden}) {
  return (
    <>
        <SectionHeading
        title="Dashboard"
        type="orders"
        btnHidden={btnHidden}
        />        
        {/* {
        loaded && error ? <p>Error Loading Dashboard</p> 
            : loaded && !error ? <p>Dashboard</p>
        : <Loader />
        } */}
    </>
  );
}