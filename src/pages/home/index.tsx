import { Fragment, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Trips } from '../../utils'
import { Container, List, Image, Title, Button, Span, Airplane, WrapList, TextButton } from './styles'

export default function Home () {
  const [trips, setTrips] = useState<Trips[]>([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/trips')
      setTrips(response.data)
    })()
  }, [])

  return (
    <Container>
      <List >
      {trips.map(it =>
          <Fragment key={it.id} >
           <WrapList>
             <Image src={it.image} alt="img trip" />
             <Title>{it.title}</Title>
             <Span>Status: {it.status ? 'Disponivel' : 'Indisponivel' }</Span>
             <Button>
                <Airplane />
                <TextButton> Solicitar reserva   </TextButton>
             </Button>
           </WrapList>
          </Fragment>
      )}
      </List>
    </Container>
  )
}
