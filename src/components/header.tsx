import React from 'react'
import { Container, SideLeft, Logo, TitleSideLeft, RightLeft, QuantityReserve } from './styles'
import logo from '../assets/logo.svg'

export default function Header () {
  return (
    <Container>
        <SideLeft>
            <Logo src={logo} alt="Logo header" />
            <TitleSideLeft to="/" >
                Home
            </TitleSideLeft>
        </SideLeft>
        <RightLeft>
            <TitleSideLeft to="/reservas" >
                Minhas Reservas
            </TitleSideLeft>
            <QuantityReserve>
              3 reservas
            </QuantityReserve>
        </RightLeft>
    </Container>
  )
}
