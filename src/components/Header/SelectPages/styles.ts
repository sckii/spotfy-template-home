import styled from 'styled-components'

export const SelectPagesContainer = styled.header`
  padding: 0rem 0.8rem;
  width: 100%;
`

export const SelectPage = styled.div`
  cursor: pointer;
  h4 {
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    display: inline-block;
  }
  img {
    display: inline-block;
    width: 100%;
    max-width: 2.4rem
  }
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: left;
  padding: 0.8rem 1.5rem;
  
  color: var(--color-text-in-primary);
  stroke: var(--color-text-in-primary);

  transition: color 0.5s;
  
  &:hover {
    color: var(--color-title-in-primary);
    stroke: var(--color-title-in-primary);
  }
`

export const SelectedPage = styled.div`
  cursor: pointer;

  h4 {
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
    display: inline-block;
  }
  img {
    display: inline-block;
    width: 100%;
    max-width: 2.4rem
  }
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: left;
  padding: 0.8rem 1.5rem;
  
  background: var(--color-primary);
  color: var(--color-title-in-primary);
  stroke: var(--color-title-in-primary);
`