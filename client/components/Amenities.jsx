import React from 'react';
import styled from 'styled-components';

const StyledMainDiv = styled.div`
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 50px;
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 30px 0px 24px 0px;
`

const StyledContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0px 0px 20px 0px;
`

const StyledAmenity = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0px 0px 16px 0px;
`

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0px 10px 0px 0px;
`

const StyledButton = styled.div`
  width: 175px;
  padding: 13px 23px 13px 23px;
  margin-bottom: 45px;
  border: 1px solid #222222;
  border-radius 8px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: #f7f7f7;
  }
`

function Amenities({ amenities, openModal }) {
  let topTen = amenities.slice(0, 10);

  return (
    <StyledMainDiv>
      <StyledTitle>Amenities</StyledTitle>
      <StyledContainer>
        {topTen.map(amn => {
          return (
            <StyledAmenity>
              <div>
                <StyledIcon src={amn.url} />
              </div>
              <div key={amn.ID}>{amn.name}&nbsp;</div>
            </StyledAmenity>
          )
        })}
      </StyledContainer>
      <StyledButton onClick={openModal}>
        {`Show all ${amenities.length} amenities`}
      </StyledButton>
    </StyledMainDiv>
  );
}

export default Amenities;
