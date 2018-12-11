import React, {Fragment} from 'react';

const Song = ({ position, title, artist}) =>{
  return(
    <Fragment>
    <p>{position} {title} by {artist} </p>
    </Fragment>
  )
}

export default Song;
