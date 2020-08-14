import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 20px 0px 45px 0px;
  border-bottom: 1px solid #c9c9c9;
`

const StyledContact = styled.div`
  padding: 40px 0px 0px 0px;
  font-weight: 500;
  text-decoration: underline;
`

const StyledText = styled.span`
  &:hover {
    cursor: pointer;
  }
`

function Description({ desc, readMore }) {
  let description;
  if (readMore) {
    description = desc;
  } else {
    description = desc.slice(0, 400);
  }
  return (
    <StyledDiv>
      <div>{desc}</div>
      <StyledContact><StyledText>Contact host</StyledText></StyledContact>
    </StyledDiv>
  );
}

export default Description;
