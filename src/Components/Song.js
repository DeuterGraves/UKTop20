import React from 'react';
import './Song.css'

const Song = ({ position, title, artist}) =>{
  return(
    <li className="song-item">
    {position}. {title} by {artist}
    </li>
  )
}

export default Song;
