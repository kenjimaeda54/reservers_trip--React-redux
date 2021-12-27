import {
  Container,
  Header,
  TitleHeader,
  TitleHeaderBold,
  Section,
  Img,
  Title,
  Quantity,
  Delete,
  Reserve,
  TitleReserve,
  Button,
  WrapQuantity,
  Minus,
  Plus
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Trips } from '../../utils'
import { removeReserve, updateReserve } from '../../store/modules/reserves/action'

interface ITrips extends Trips {
  amount: number;
}

export default function Reserves () {
  const reserves: ITrips[] = useSelector(state => state.reserveReducer)
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(removeReserve(id))
  }

  // por boas pratcias as funcoes tem que ser pequenas e ter apenas uma responsabilidade
  // fazer duas fucnoes para adicionar e remover e melhor que faze   uma unica funcao
  function decrementReserve (trips:ITrips) {
    dispatch(updateReserve(trips.id, Number(trips.amount - 1)))
  }

  function incrementUReserve (trips:ITrips) {
    dispatch(updateReserve(trips.id, Number(trips.amount + 1)))
  }

  return (
    <Container>
        <Header>
          <TitleHeader>Voce solicitou </TitleHeader>
          <TitleHeaderBold> {reserves.length} viagens </TitleHeaderBold>
        </Header>
           {reserves.map(reserve => {
             const id = reserve.id * parseInt((Math.random() * 10000000).toString())
             return (
            <Section key={id}>
              <Img src={reserve.image} alt="img card reserve"/>
              <Title>{reserve.title}</Title>
              <WrapQuantity>
                <Button onClick={() => decrementReserve(reserve) } type="button" >
                  <Minus />
                </Button>
                <Quantity> {reserve.amount}</Quantity>
                <Button onClick={() => incrementUReserve(reserve) } >
                  <Plus />
                </Button>
              </WrapQuantity>
              <Button onClick={() => handleRemove(reserve.id)} >
                  <Delete />
              </Button>
            </Section>

             )
           })}
        <Reserve>
           <TitleReserve>Solicitar reserva</TitleReserve>
        </Reserve>
    </Container>
  )
}
