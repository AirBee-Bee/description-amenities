import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid #c9c9c9;
  padding-top: 5px;
  padding-bottom: 26px;
`
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledHighlightTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 0px 5px 0px;
`

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 0px 15px 0px 0px;
`

const StyledDesc = styled.div`
  font-size: 14px;
  color: #717171;
  padding: 0px 0px 15px 0px;
`

function Highlights({ highlights, host }) {
  const descriptions = [
    `10 recent guests complimented ${host} for outstanding hospitality.`,
    'Add your trip dates to get the cancellation details for this stay.',
    'You’ll have the entire property to yourself.',
    'Check yourself in with the keypad.',
    'This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts.',
    '20 recent guests said this place was sparkling clean.',
    'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    'The host has equipped this place for long stays - kitchen, wifi, and heating included.'
  ];
  return (
    <StyledDiv>
      {highlights.map(hl => {
        let title = hl.highlight_ID === 7 ? `${host} is a ${hl.name}` : hl.name;
        let index = hl.highlight_ID;
        return (
          <div key={hl.highlight_ID}>
            <div><StyledIcon src={hl.url} /></div>
            <div>
              <StyledHighlightTitle>{title}</StyledHighlightTitle>
              <StyledDesc>{descriptions[index - 1]}</StyledDesc>
            </div>
          </div>
        )
      })}
    </StyledDiv>
  );
}

export default Highlights;
