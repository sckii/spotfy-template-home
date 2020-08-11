import React from 'react'
import { ButtonContainer, ButtonField } from './styles'

import BackIcon from '../../../assets/svg/chevron-back-outline.svg'
import ForwardIcon from '../../../assets/svg/chevron-forward-outline.svg'

function Buttons() {
  return (
    <ButtonContainer>
      <ButtonField>
        <img src={BackIcon} alt=""/>
      </ButtonField>
      <ButtonField>
        <img src={ForwardIcon} alt=""/>
      </ButtonField>
    </ButtonContainer>
  )
}

export default Buttons