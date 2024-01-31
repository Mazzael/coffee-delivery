import { CheckCircle, ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../Form/QuantityInput'
import {
  CoffeeImage,
  Container,
  Description,
  Order,
  OrderBar,
  Price,
  Tags,
  Title,
} from './styles'
import { useTheme } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

type CoffeeCardProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const theme = useTheme()

  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  const { addItem } = useContext(CartContext)

  function incrementQuatity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <Container>
      <CoffeeImage src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <OrderBar>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuatity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckCircle
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </Order>
      </OrderBar>
    </Container>
  )
}
