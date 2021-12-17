import React, { useEffect } from 'react'
import Header from '../../components/header'
import { api } from '../../services/api'
// import { Trips } from '../../utils'

export default function Home () {
  // const [reserves, setReserves] = React.useState<Trips[]>([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/trips')
      console.log(response.data)
    })()
  }, [])

  return (
    <div>
      <Header />
      Home
    </div>
  )
}
