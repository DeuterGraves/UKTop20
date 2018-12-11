import React from 'react';
import Song from './Song.js';
import './SongList.css'

const SongList = ({songs}) => {

  const songNodes = songs.map((song, index) => {
    return <Song
    key = {song.id.attributes["im:id"]}
    position = {index+1}
    title = {song["im:name"].label}
    artist = {song["im:artist"].label}
    image = {song["im:image"][1].label}
    imageHeight = {song["im:image"][1].attributes.height}
    // previewLink = {song.link[1].attributes.href} 
    />
  });

  return(
    <div className="song-list">
    { songNodes }
    </div>
  )
}


export default SongList;
