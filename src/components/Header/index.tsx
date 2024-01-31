import { Aside, HeaderContainer } from './styles'

import Logo from '../../assets/LogoCoffeeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
