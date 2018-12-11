import React from 'react';
import Song from './Song.js';

const SongList = ({songs}) => {

  const songNodes = songs.map((song, index) => {
    return <Song
    key = {song.id.attributes["im:id"]}
    position = {index+1}
    title = {song["im:name"].label}
    artist = {song["im:artist"].label} />
  });

  return(
    <div>
    { songNodes }
    </div>
  )
}


export default SongList;
