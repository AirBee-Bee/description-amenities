import React from 'react';

function Title( {info} ) {
  return (
    <div>
      <div>{info.title} hosted by {info.host}</div>
      <div>
        {info.guests} Guests&nbsp;
        {info.rooms} Rooms&nbsp;
        {info.beds} Beds&nbsp;
        {info.baths} Baths
      </div>
    </div>
  );
}

export default Title;
