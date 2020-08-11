import styled from 'styled-components'

export const PlayerContainer = styled.div`
  overflow: visible;
  width: 100vw;
  display: none;
  position: fixed;
  bottom: 0;
  height: 9.8rem;
  border-top: 2px solid black;
  background-color: var(--color-primary);
  z-index: 210;
  
  @media (min-height: 600px) {
    display: initial;
    
  }
`
