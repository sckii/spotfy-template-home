import React from 'react'

import { UtilityBar, Bar } from './styles'

import Buttons from './Buttons'
import Profile from './Profile'

function SearchBar() {
  return (
    <UtilityBar>
      <Bar>
        <Buttons />
        <Profile />
      </Bar>
    </UtilityBar>
  )
}

export default SearchBar