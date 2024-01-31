import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { Container } from './styles'

type PaymentOptionButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const PaymentOptionButton = forwardRef(function PaymentOptionButton(
  { children, isSelected, ...rest }: PaymentOptionButtonProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
