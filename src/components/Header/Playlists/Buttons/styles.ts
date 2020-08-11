import styled from 'styled-components'

export const ButtonContainer = styled.div `
  
  padding: 1.3rem 0rem;
  width: 100%;
  border-bottom: 1px solid var(--color-primary);
`
export const Box = styled.div`
  opacity: 0.6; 
  margin-top: 1rem;
  align-items: center;
  display: flex;
  width: 100%;
  transition: opacity 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: var(--color-title-in-primary);
  img {
    width: 50%;
  }
`

export const TitleBox = styled.h5`
  color: var(--color-title-in-primary);
  padding-left: 1.5rem;
`

export const ButtonBoxGradient = styled.div`
  
  display: flex;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background: var(--color-gradient);
  
  img {
    width: 50%;
  }
  
`