import { Route, Link } from "wouter"

import HomePage from './pages/HomePage.js'
import EditPage from './pages/EditPage.js'
import PreviewPage from './pages/PreviewPage.js'

export const App = () => {
  return (
    <>
      <Link href="/edit">
        <a className="link">edit</a>
      </Link>
      <Route path="/" component={HomePage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/preview" component={PreviewPage} />
    </>
  )
}
