import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid #c9c9c9;
  padding-top: 48px;
  padding-bottom: 24px;
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 0px 0px 8px 0px;
`

function Title( {info} ) {
  return (
    <StyledDiv>
      <StyledTitle>{info.title} hosted by {info.host}</StyledTitle>
      <div>
        {info.guests} guests&nbsp;·&nbsp;
        {info.rooms} rooms&nbsp;·&nbsp;
        {info.beds} beds&nbsp;·&nbsp;
        {info.baths} baths
      </div>
    </StyledDiv>
  );
}

export default Title;
