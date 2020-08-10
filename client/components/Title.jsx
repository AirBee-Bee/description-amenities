import React from 'react';

function Title( {info} ) {
  return (
  <span>{info.title} hosted by {info.host}</span>
  );
}

export default Title;
