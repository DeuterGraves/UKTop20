import React from 'react';
import Song from './Song.js';
import './SongList.css'

const SongList = ({songs}) => {

  const songNodes = songs.map((song, index) => {
    return <Song
    key = {song.id.attributes["im:id"]}
    position = {index+1}
    title = {song["im:name"].label}
    artist = {song["im:artist"].label} />
  });

  return(
    <div className="song-list">
    { songNodes }
    </div>
  )
}


export default SongList;
