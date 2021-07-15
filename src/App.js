import { Route, Link } from "wouter"

import HomePage from './pages/HomePage.js'
import EditPage from './pages/EditPage.js'
import PreviewPage from './pages/PreviewPage.js'

export const App = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/new" component={PreviewPage} />
      <Route path="/edit:idProfile" component={EditPage} />
      <Route path="/preview:idProfile" component={PreviewPage} />
    </>
  )
}
