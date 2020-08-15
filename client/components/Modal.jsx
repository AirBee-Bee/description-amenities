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
  padding: 0px 0px 32px 10px;
`

const StyledCategory = styled.div`
  font-size: 17px;
  font-weight: 500;
  padding-left: 10px;
`

function Modal({ closeModal, amenities }) {
  const basic = [];
  const facilities = [];
  const dining = [];
  const bedBath = [];
  const notIncluded = [
    '24 Hour Check-In',
    'Air Conditioning',
    'Heating',
    'Cable TV',
    'Free WiFi',
    'Smoke Detector',
    'Free Parking',
    'Washer/Dryer'
  ];

  for (let i = 0; i < amenities.length; i++) {
    if (amenities[i].amenity_ID > 0 && amenities[i].amenity_ID < 7) {
      basic.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 6 && amenities[i].amenity_ID < 16) {
      facilities.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 15 && amenities[i].amenity_ID < 20) {
      dining.push(amenities[i].name);
    }
    if (amenities[i].amenity_ID > 19) {
      bedBath.push(amenities[i].name);
    }
    if (notIncluded.includes(amenities[i].name)) {
      let index = notIncluded.indexOf(amenities[i].name);
      notIncluded.splice(index, 1)
    }
  }

  return (
    <StyledModal>
      <StyledEsc onClick={closeModal}>X</StyledEsc>
      <StyledTitle>Amenities</StyledTitle>
      <StyledCategory>
        {/* show these category titles if they have amenities */}
        <div>{basic.length > 0 ? 'Basic' : null}</div>
        <div>{facilities.length > 0 ? 'Facilities' : null}</div>
        <div>{dining.length > 0 ? 'Dining' : null}</div>
        <div>{bedBath.length > 0 ? 'Bed and Bath' : null}</div>
        <div>{notIncluded.length > 0 ? 'Not Included' : null}</div>
      </StyledCategory>
    </StyledModal>
  );
}

export default Modal;
