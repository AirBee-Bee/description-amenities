import React from 'react';

function Highlights( {highlights} ) {
  return (
    <div>
      {highlights.map(hl => {
        return (<div key={hl.ID}>{hl.name}</div>)
      })}
    </div>
  );
}

export default Highlights;
