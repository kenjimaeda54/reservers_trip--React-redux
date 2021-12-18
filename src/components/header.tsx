import { Container, SideLeft, Logo, TitleSideLeft, RightLeft, QuantityReserve } from './styles'
import logo from '../assets/logo.svg'
import { useSelector } from 'react-redux'
import { Trips } from '../utils'

export default function Header () {
  // useSelector(state => state.nomedoReducer)
  const reserve: Trips[] = useSelector(state => state.reserveReducer)

  return (
    <Container>
        <SideLeft to="/" >
            <Logo src={logo} alt="Logo header" />
            <TitleSideLeft >
                Home
            </TitleSideLeft>
        </SideLeft>
        <RightLeft to="/reservas">
            <TitleSideLeft >
                Minhas Reservas
            </TitleSideLeft>
            <QuantityReserve>
              {reserve.length} reservas
            </QuantityReserve>
        </RightLeft>
    </Container>
  )
}
