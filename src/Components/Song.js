import React from 'react';
import './Song.css'

const Song = ({ position, title, artist, image, imageHeight, previewLink}) =>{
  return(
    <li className="song-item">
    <img src={image} height={imageHeight} alt={title} className="song-image"></img> <section className="song-content">{position}. {title} by {artist}</section>
    </li>
  )
}

export default Song;
