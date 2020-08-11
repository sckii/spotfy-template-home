import React from 'react'
import Logo from './Logo/styles'
import SpotifyLogo from '../../assets/img/logo-white.png'
import HeaderContainer from './styles'
import SelectPages from './SelectPages'
import Playlist from './Playlists'



function Header() {
  return (
    <HeaderContainer>
      <Logo src={SpotifyLogo} />
      <SelectPages />
      <Playlist />
    </HeaderContainer>
  )
}

export default Header