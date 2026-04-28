import React from 'react';
import { DetailsSection, ModalWrapperOverlay, ModalWrapperStyle } from './modaloverlay.styles';


export default function ModalOverlay({content}) {
  return (
    <ModalWrapperOverlay>
            <ModalWrapperStyle>
                <DetailsSection>
                    {content}
                </DetailsSection>
            </ModalWrapperStyle>
    </ModalWrapperOverlay>
  )
}