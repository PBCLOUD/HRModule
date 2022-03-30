import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import { withAuthenticator } from '@aws-amplify/ui-react'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'))

// Pages

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path='/404'
            name='Page 404'
            render={(props) => <Page404 {...props} />}
          />

          <Route
            path='/'
            name='Dashboard'
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default withAuthenticator(App)
