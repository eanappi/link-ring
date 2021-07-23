import { Route } from "wouter"

import HomePage from './pages/HomePage'
import NewPage from './pages/NewPage'

export const App = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/new" component={NewPage} />
    </>
  )
}
