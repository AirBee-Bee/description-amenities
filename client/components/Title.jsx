import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c9c9c9;
  padding-top: 48px;
  padding-bottom: 24px;
`

const StyledTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 0px 0px 8px 0px;
`

const StyledPhoto = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`

function Title({ info }) {
  return (
    <StyledDiv>
      <StyledTitleDiv>
        <StyledTitle>{info.title} hosted by {info.host}</StyledTitle>
        <div>
          {info.guests} guests&nbsp;·&nbsp;
        {info.rooms} rooms&nbsp;·&nbsp;
        {info.beds} beds&nbsp;·&nbsp;
        {info.baths} baths
      </div>
      </StyledTitleDiv>
      <StyledPhoto src={info.hostPhoto} />
    </StyledDiv>
  );
}

export default Title;
