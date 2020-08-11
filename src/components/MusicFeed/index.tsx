import React from 'react'
import { FeedContainer, Title, RowElements } from './styles'
import DefalutBox from '../DefaultBox'

function MusicFeed() {
  return (
    <FeedContainer>
      <Title>Atalhos</Title>
      <RowElements>
        <DefalutBox />
        <DefalutBox />
        <DefalutBox />
        <DefalutBox />  
      </RowElements>    
    </FeedContainer>
  )
}

export default MusicFeed