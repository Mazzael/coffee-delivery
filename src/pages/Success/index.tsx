import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Heading, Info, InfoContent, InfoSection } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useParams } from 'react-router-dom'

import SuccessImage from '../../assets/Success.svg'

export function Success() {
  const theme = useTheme()

  const { orders } = useContext(CartContext)
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <InfoSection>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>

          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.purple }}
              />

              <div>
                <span>
                  Entrega em {'  '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors.yellow }}
              />

              <div>
                <span>Previsão de entrega</span>

                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </div>

            <div>
              <CurrencyDollar
                size={32}
                color={theme.colors.white}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />

              <div>
                <span>Pagamento na entrega</span>

                <span>
                  <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                </span>
              </div>
            </div>
          </InfoContent>
        </Info>
      </InfoSection>

      <img src={SuccessImage} alt="Pedido concluído com sucesso" />
    </Container>
  )
}
