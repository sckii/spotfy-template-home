import React from 'react'
import { PlaylistContainer, Title, PlaylistDiv} from './styles'
import Buttons from './Buttons'
import PlaylistSave from './PlaylistSave'


function Playlist() {
  return (
    <PlaylistContainer>
      <Title> PLAYLISTS </Title>
      <Buttons />
      <PlaylistDiv>
        
          <PlaylistSave title="playlist 1"/>
          <PlaylistSave title="playlist 2"/>
          <PlaylistSave title="playlist 3"/>
          <PlaylistSave title="playlist 4"/>
          <PlaylistSave title="playlist 5"/>
          <PlaylistSave title="playlist 6"/>
          <PlaylistSave title="playlist 7"/>
        
      </PlaylistDiv>
    </PlaylistContainer>
  )
}

export default Playlist