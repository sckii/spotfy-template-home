import styled from 'styled-components'

export const PlaylistContainer = styled.div `
  height: 100%;
  width: 100%;
  padding: 2.3rem 2.5rem;
`

export const Title = styled.h6 `
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: left;
  letter-spacing: 0.2rem;
  color: var(--color-text-in-primary);
`
export const PlaylistDiv = styled.div`
  height: 30%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 0.4rem;

  @media (min-height: 700px) {
    height: fit-content;
  }
  
`