import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  display: flex;
  max-width: 72.5rem;
  padding: 2.5rem 1.25rem;
  gap: 2rem;
  margin: 0 auto;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  width: 100%;
  min-width: 40rem;

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['base-card']};

  gap: 2rem;
`

export const Addresscontainer = styled(FormsContainer)``

const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const CartItems = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  width: 100%;
  min-width: 28rem;

  background-color: ${(props) => props.theme.colors['base-card']};

  > span {
    display: block;

    background-color: ${(props) => props.theme.colors['base-button']};

    margin: 1.5rem;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS}
    }

    span:last-child {
      ${mixins.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`

export const FinishOrder = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  text-transform: uppercase;

  ${mixins.fonts.buttonG}
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
