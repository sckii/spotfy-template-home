import React from 'react'
import { SelectPagesContainer, SelectPage, SelectedPage } from './styles'

import HomeIcon from '../../../assets/svg/home.svg'
import SearchIcon from '../../../assets/svg/search-outline.svg'
import LibraryIcon from '../../../assets/svg/book.svg'


function SelectPages() {
  return (
    <SelectPagesContainer>
      <SelectedPage><img src={HomeIcon} alt="inicio icone"/> <h4>Inicio</h4> </SelectedPage>
      <SelectPage><img src={SearchIcon} alt="buscar"/> <h4>Buscar</h4> </SelectPage>
      <SelectPage><img src={LibraryIcon} alt=""/> <h4>Sua Biblioteca</h4> </SelectPage>
    </SelectPagesContainer>
  )
}

export default SelectPages