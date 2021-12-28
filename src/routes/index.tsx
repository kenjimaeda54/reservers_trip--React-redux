import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Reserves from '../pages/reserves'

export function AppRoutes () {
  return (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/reservas" component={Reserves} />
  </Switch>
  )
}
