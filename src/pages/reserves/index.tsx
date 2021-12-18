import { Container, Header, TitleHeader, TitleHeaderBold, Section, Img, Title, Quantity, Delete, Reserve, TitleReserve, Button } from './styles'
import { useSelector } from 'react-redux'
import { Trips } from '../../utils'

interface ITrips extends Trips {
  amount: number;
}

export default function Reserves () {
  const reserves: ITrips[] = useSelector(state => state.reserveReducer)

  return (
    <Container>
        <Header>
          <TitleHeader>Voce solicitou </TitleHeader>
          <TitleHeaderBold> {reserves.length} viagens </TitleHeaderBold>
        </Header>
           {reserves.map(reserve =>
            <Section key={reserve.id}>
              <Img src={reserve.image} alt="img card reserve"/>
              <Title>{reserve.title}</Title>
              <Quantity>Quantidade {reserve.amount}</Quantity>
              <Button>
                <Delete />
              </Button>
            </Section>
           )}
        <Reserve>
           <TitleReserve>Solicitar reserva</TitleReserve>
        </Reserve>
    </Container>
  )
}
