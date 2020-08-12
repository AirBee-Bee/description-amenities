import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid #c9c9c9;
  padding-top: 5px;
  padding-bottom: 26px;
`

const StyledHighlightTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  padding: 5px 0px 5px 0px;
`

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0px 15px 0px 0px;
`

function Highlights( {highlights} ) {
  return (
    <StyledDiv>
      {highlights.map(hl => {
        return (<StyledHighlightTitle key={hl.ID}><StyledIcon src={hl.url} />{hl.name}</StyledHighlightTitle>)
      })}
    </StyledDiv>
  );
}

export default Highlights;
