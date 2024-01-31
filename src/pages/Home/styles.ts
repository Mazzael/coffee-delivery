import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const MainSection = styled.section`
  position: relative;
`

export const Content = styled.div`
  max-width: 90rem;
  padding: 10rem 5.875rem;
  margin: 0 auto;

  gap: 3.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['base-title']};
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const ContentInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  svg {
    padding: 0.5rem;
    border-radius: 999px;
  }
`

export const CoffeesSection = styled.section`
  max-width: 90rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 3.375rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
