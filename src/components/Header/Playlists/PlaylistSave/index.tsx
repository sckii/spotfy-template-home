import React from 'react'
import { PlaylistBox } from './styles'

interface PlaylistProps {
  title: string
}

const PlaylistSave: React.FC<PlaylistProps> = ({ title }) => {
  return (
    <>
      <PlaylistBox>{title}</PlaylistBox>
    </>
  )
}

export default PlaylistSave