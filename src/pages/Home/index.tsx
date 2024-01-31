import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeesSection,
  Content,
  ContentHeader,
  ContentInfo,
  MainSection,
} from './styles'
import { useTheme } from 'styled-components'
import CoffeeImage from '../../assets/CoffeeImage.svg'

import { coffees } from '../../../coffesData.json'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <MainSection>
        <Content>
          <div>
            <ContentHeader>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </ContentHeader>

            <ContentInfo>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />

                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />

                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.yellow }}
                />

                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.purple }}
                />

                <span>O café chega fresquinho até você</span>
              </div>
            </ContentInfo>
          </div>

          <img src={CoffeeImage} alt="Café do Coffee Delivery" />
          {/* <img src="../../../public/images/expresso.png" alt="" /> */}
        </Content>
      </MainSection>

      <CoffeesSection>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeesSection>
    </div>
  )
}
