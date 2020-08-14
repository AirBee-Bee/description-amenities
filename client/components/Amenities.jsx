import React from 'react';
import styled from 'styled-components';

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

function Amenities({ amenities }) {
  let topTen = amenities.slice(0, 10);

  return (
    <div>
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
    </div>
  );
}

export default Amenities;
