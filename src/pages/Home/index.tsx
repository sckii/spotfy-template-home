import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { Page, Feed } from './styles'

function Home() {
  return (
    <Page>
      <Header />
      <Feed>
        <SearchBar />
        
      </Feed>
    </Page>
  )
}

export default Home