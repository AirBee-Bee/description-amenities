import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`

const StyledEsc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.05s ease;
  font-family: 'Arial';
  margin-bottom: 25px;

  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding-left: 10px;
`

const StyledCategory = styled.div`
  font-size: 18px;
  font-weight: 500;
`

function Modal({ closeModal, amenities }) {
  const basic = ['Basic'];
  const facilities = ['Facilities'];
  const dining = ['Dining'];
  const bedBath = ['Bed and Bath'];
  const notIncluded = ['Not Included'];

  // for (let i = 0; i < amenities.length; i++) {

  // }

  return (
    <StyledModal>
      <StyledEsc onClick={closeModal}>X</StyledEsc>
      <StyledTitle>Amenities</StyledTitle>
      {/* show these category titles if they have amenities */}
      {basic.length > 1 ? basic[0] : null}
      {facilities.length > 1 ? facilities[0] : null}
      {dining.length > 1 ? dining[0] : null}
      {bedBath.length > 1 ? bedBath[0] : null}
      {notIncluded.length > 1 ? notIncluded[0] : null}
    </StyledModal>
  );
}

export default Modal;
