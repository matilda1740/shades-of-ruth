import React, { useState } from 'react'
import { useFirestoreGet } from '../../../../Hooks/firebaseHooks';
import { SectionWrapper } from '../../../Account/account.style';
import CustomAccordion, { AccordionWrapper } from '../../../ReusableComponents/Accordion';
import Loader from '../../../ReusableComponents/Loader';
import SectionHeading from '../../../ReusableComponents/SectionHeading';
import { ModuleStyle } from '../Products'

import { db }from "../../../../firebase"
import { doc, getDoc } from "firebase/firestore"; 
import BranchForm from '../../UpdateForms/Branches';

export function Addresses() {
    const { data, error, loaded } = useFirestoreGet("branches");

    // const [type, setType] = useState("branches");
    // const [branchID, setBranchID] = useState("");

    // const handleClick = (id) => () => setBranchID(id)

    // const getDataById = async () => {
    //     const docSnap = await getDoc(doc(db, type, branchID)).catch(error => console.log(error))
    //     return docSnap.data();
    // }    
    const [ isBranchFormOpen, setIsBranchFormOpen] = useState(false);

    const handleReveal = () => setIsBranchFormOpen(!isBranchFormOpen);

    return (
        <ModuleStyle>
            <SectionHeading
                title="Delivery Locations"
                btnHidden={true}
                type="locations"
            /> 

            {
                loaded && error ? <p>Error Loading Products</p> 
                : loaded && !error ? 
                <SectionWrapper className="column"> 
                    <SectionHeading
                        title="Branches"
                        addText="New Branch"
                        isReveal={true}
                        handleReveal={handleReveal}
                    /> 
                    {/* { isBranchFormOpen && */}
                        <BranchForm visibility={isBranchFormOpen ? "" : "not_visible"} />
                    {/* } */}
                    <>
                    {data?.map((branch, i) => (
                        <AccordionWrapper key={i} className="secondary_acc_style" >
                            <CustomAccordion 
                                label={branch.name}
                            />
                        </AccordionWrapper>

                    ))}
                    </>
                </SectionWrapper>
                : <Loader />
            }             
        </ModuleStyle>
    );
}