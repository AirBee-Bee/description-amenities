import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
`

function Modal({ isOpen }) {
  return (
    <StyledModal>
      <StyledTitle>Amenities</StyledTitle>
    </StyledModal>
  );
}

export default Modal;
