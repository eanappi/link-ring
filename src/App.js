import { Route } from "wouter"

import HomePage from './pages/HomePage'
import NewPage from './pages/NewPage'
import EditPage from './pages/EditPage'
import PreviewPage from './pages/PreviewPage'

export const App = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/new" component={NewPage} />
      <Route path="/edit:idProfile" component={EditPage} />
      <Route path="/preview:idProfile" component={PreviewPage} />
    </>
  )
}
