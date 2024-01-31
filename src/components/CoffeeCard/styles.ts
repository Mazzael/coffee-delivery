import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};

  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImage = styled.img`
  max-width: 7.5rem;
  max-height: 7.5rem;
  margin-top: -1.25rem;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  gap: 0.25rem;

  display: flex;
  align-self: center;
  align-items: center;

  span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 8px;

    color: ${(props) => props.theme.colors['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;

  color: ${(props) => props.theme.colors['base-subtitle']};
  ${mixins.fonts.titleS}
`

export const Description = styled.span`
  margin-top: 0.5rem;

  color: ${(props) => props.theme.colors['base-label']};
  ${mixins.fonts.textS}
`

export const OrderBar = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;

  gap: 0.125rem;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${(props) =>
      props.$itemAdded
        ? props.theme.colors['yellow-dark']
        : props.theme.colors['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${(props) =>
        props.$itemAdded
          ? props.theme.colors.yellow
          : props.theme.colors.purple};
    }
  }
`
