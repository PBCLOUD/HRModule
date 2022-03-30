import React, { Suspense, useState, useContext, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import { UserContext } from '../context/UserContext'

// routes config
import adminRoutes from '../routes/adminRoutes'
import securityRoutes from '../routes/securityRoutes'
import marketingRoutes from '../routes/marketingRoutes'
import grcRoutes from '../routes/grcRoutes'
import devopsRoutes from '../routes/devopsRoutes'
import commonRoutes from '../routes/commonRoutes'
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

const TheContent = () => {
  const { user, groupType } = useContext(UserContext)
  const [localRoutes, setLocalRoutes] = useState(
    ((groupType === 'Admins'
      ? adminRoutes
      : groupType === 'SecurityTeam'
      ? securityRoutes
      : groupType === 'MarketingTeam'
      ? marketingRoutes
      : groupType === 'GrcTeam'
      ? grcRoutes
      : groupType === 'DevOpsTeam'
      ? devopsRoutes
      : null): null)
  )

  const [totalRoutes, setTotalRoutes] = useState(
    localRoutes.concat(commonRoutes)
  )

  return (
    <main className='c-main'>
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {totalRoutes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              )
            })}

            <Redirect from='/' to='/dashboard' />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
