import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { Page, Feed } from './styles'
import Footer from '../../components/Footer'
import MusicFeed from '../../components/MusicFeed'

function Home() {
  return (
    <Page>
      <Header />
      <Feed>
        <SearchBar />
        <MusicFeed />
      </Feed>
      <Footer />
    </Page>
  )
}

export default Home