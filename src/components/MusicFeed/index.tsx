import React from 'react'
import { FeedContainer, Title, RowElements, CategoryContainer } from './styles'
import DefalutBox from '../DefaultBox'

function MusicFeed() {
  return (
    <FeedContainer>
      <CategoryContainer>
        <Title>Atalhos</Title>
        <RowElements>
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />  
        </RowElements>   
      </CategoryContainer>
      <CategoryContainer>
        <Title>Recentmente Tocadas</Title>
        <RowElements>
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />  
        </RowElements>   
      </CategoryContainer> 
      <CategoryContainer>
        <Title>Favoritas</Title>
        <RowElements>
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />
          <DefalutBox />  
        </RowElements>   
      </CategoryContainer>  
      
    </FeedContainer>
  )
}

export default MusicFeed