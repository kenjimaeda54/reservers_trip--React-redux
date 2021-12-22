import { Fragment, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useDispatch } from 'react-redux'
import { Trips } from '../../utils'
import { Container, List, Image, Title, Button, Span, Airplane, WrapList, TextButton } from './styles'
import { addReserveRequest } from '../../store/modules/reserves/action'

export type DispatchProps = {
  type: string
  payload: Trips
}

export default function Home () {
  const dispatch = useDispatch()
  const [trips, setTrips] = useState<Trips[]>([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/trips')
      setTrips(response.data)
    })()
  }, [])

  function handleAddReserve (trips: Trips) {
    dispatch(addReserveRequest(trips.id))
  }

  return (
    <Container>
      <List >
      {trips.map(it =>
          <Fragment key={it.id} >
           <WrapList>
             <Image src={it.image} alt="img trip" />
             <Title>{it.title}</Title>
             <Span>Status: {it.status ? 'Disponivel' : 'Indisponivel' }</Span>
             <Button onClick={() => handleAddReserve(it)} >
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
