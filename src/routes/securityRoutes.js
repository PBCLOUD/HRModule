import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

const SecurityTeam = React.lazy(() =>
  import('../views/securityteam/SecurityTeam')
)

const securityRoutes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  {
    path: '/securityteam',
    exact: true,
    name: 'SecurityTeam',
    component: SecurityTeam,
  },
]

export default securityRoutes
