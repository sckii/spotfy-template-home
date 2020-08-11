import React from 'react'
import { ButtonContainer, ButtonBox, TitleBox, Box, ButtonBoxGradient } from './styles'
import PlusIcon from '../../../../assets/svg/plus.svg'
import HeartIcon from '../../../../assets/svg/heart.svg'


function Buttons() {
  return (
    <>  
      <ButtonContainer>
        <Box><ButtonBox><img src={PlusIcon} alt=""/></ButtonBox><TitleBox>Criar Playlist</TitleBox></Box>
        <Box><ButtonBoxGradient><img src={HeartIcon} alt=""/></ButtonBoxGradient><TitleBox>Musicas Curtidas</TitleBox></Box>
      </ButtonContainer>
    </>
  )
}

export default Buttons