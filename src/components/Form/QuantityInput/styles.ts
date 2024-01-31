import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  padding: 0.5rem;
  gap: 0.5rem;

  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 8px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
