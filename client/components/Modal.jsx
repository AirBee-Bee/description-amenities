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

function Modal({ closeModal, amenities }) {
  return (
    <StyledModal>
      <StyledEsc onClick={closeModal}>X</StyledEsc>
      <StyledTitle>Amenities</StyledTitle>
    </StyledModal>
  );
}

export default Modal;
