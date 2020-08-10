import React from 'react';

function Amenities( {amenities} ) {
  return (
    <div>
      {amenities.map(amn => {
        return (<div key={amn.ID}>{amn.name}&nbsp;</div>)
      })}
    </div>
  );
}

export default Amenities;
