import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: absolute;
  right: 0;
  padding: 1.8rem 3rem;
`

export const ProfileField = styled.div`
  border-radius: 2rem;
  cursor: pointer;
  height: 3.3rem;
  span {
    font: 700 1.6rem Archivo;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    position: absolute;
    display: none;
    padding: 0.3rem 1.5rem 0.7rem 1rem;
    background: var(--color-primary-dark);
    color: white;
    img {
      border: none;
      margin-top: 0.7rem;
      justify-items : center;
      align-items: center;
      width: 2rem;
      height: 1.3rem
    }
    
  }
  img {
    border: 2px solid black;
    border-radius: 30rem;
    width: 3.3rem;
  }
  &:hover span{
      background: var(--color-primary);
    }
  &:hover > img{
    border: 2px solid var(--color-primary)
  }
  &:hover {
    background: var(--color-primary);
  }

  @media (min-width: 1300px){
    border-radius: 0rem;
    margin-right: 10rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    background-color: var(--color-primary-dark);
    span {
      display: initial;
    }
  }
`