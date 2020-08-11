import React from 'react'
import { MusicContainer, ImageBox, Name, Author, PlayButton } from './styles'

import PlayButtons from '../../assets/svg/play.svg'

function DefalutBox() {
  return (
    <MusicContainer>
      <ImageBox src="https://exitoina.uol.com.br/media/uploads/dualipanewsingle.jpg" />
      <Name>Don't Start Now</Name>
      <Author>Dua Lipa</Author>
      <PlayButton><img src={PlayButtons} alt=""/></PlayButton>
    </MusicContainer>
  )
}

export default DefalutBox