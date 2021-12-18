import { Container, Header, TitleHeader, TitleHeaderBold, Section, Img, Title, Quantity, Delete, Reserve, TitleReserve, Button } from './styles'
import { useSelector } from 'react-redux'
import { Trips } from '../../utils'

export default function Reserves () {
  const reserves: Trips[] = useSelector(state => state.reserveReducer)

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
              <Quantity>Quantidade 2</Quantity>
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
