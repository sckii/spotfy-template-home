import styled from 'styled-components'

export const PlayButton = styled.div`
  visibility: hidden;
  display: flex;
  z-index: 100;
  position: relative;
  box-shadow: 0px 0px 10px black;
  right: -14rem;
  top: -3.4rem;
  border-radius: 10rem;
  width: 4.5rem;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  background: var(--color-secundary);
  cursor: pointer;
  img {
    width: 2rem
  }
  &:hover {
    transform: scale(1.1)
  }
  
`
export const MusicContainer = styled.div`
  cursor: pointer;
  overflow: hidden;
  margin-left: 1.6rem;
  width: 20rem;
  height: 28.8rem;
  background: var(--color-primary);
  border-radius: 1rem;
  &:hover ${PlayButton} {
    visibility: visible
  }
`
export const ImageBox = styled.img`
  box-shadow: 0px 0px 10px var(--color-primary-dark);
  margin: 2.5rem 2.7rem;
  width: 15rem;
  height: 15rem;
`
export const Name = styled.h4`
  color: white;
  margin-left: 2.5rem;
`
export const Author = styled.h6`
  opacity: 0.6;
  color: var(--color-text-in-primary);
  margin-left: 2.5rem;
  margin-top: 3rem;
`
