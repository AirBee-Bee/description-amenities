import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 24px;
`

function Amenities( {amenities} ) {
  return (
    <div>
      <StyledTitle>Amenities</StyledTitle>
      {amenities.map(amn => {
        return (<div key={amn.ID}>{amn.name}&nbsp;</div>)
      })}
    </div>
  );
}

export default Amenities;
