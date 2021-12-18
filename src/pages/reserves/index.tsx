import { Container, Section, Img, Title, Quantity, Delete, Reserve, TitleReserve, Button } from './styles'

export default function Reserves () {
  return (
    <Container>
        <Section>
            <Img src=" https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="img card reserve"/>
            <Title>Viagem para maceio</Title>
            <Quantity>Quantidade 2</Quantity>
            <Button>
             <Delete />
            </Button>
        </Section>
        <Reserve>
           <TitleReserve>Solicitar reserva</TitleReserve>
        </Reserve>
    </Container>
  )
}
