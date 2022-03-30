import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Users = React.lazy(() => import('./views/users/Users'))
const User = React.lazy(() => import('./views/users/User'))
const GrcTeam = React.lazy(() => import('./views/grcteam/GrcTeam'))
const ManagementTeam = React.lazy(() =>
  import('./views/managementteam/ManagementTeam')
)
const MarketingTeam = React.lazy(() =>
  import('./views/marketingteam/MarketingTeam')
)

const SecurityTeam = React.lazy(() =>
  import('./views/securityteam/SecurityTeam')
)

const DevopsTeam = React.lazy(() => import('./views/devopsteam/DevopsTeam'))
const routes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  {
    path: '/securityteam',
    exact: true,
    name: 'SecurityTeam',
    component: SecurityTeam,
  },
  {
    path: '/devopsteam',
    exact: true,
    name: 'DevopsTeam',
    component: DevopsTeam,
  },
  {
    path: '/grcteam',
    exact: true,
    name: 'GrcTeam',
    component: GrcTeam,
  },
  {
    path: '/marketingteam',
    exact: true,
    name: 'MarketingTeam',
    component: MarketingTeam,
  },
  {
    path: '/managementteam',
    exact: true,
    name: 'ManagementTeam',
    component: ManagementTeam,
  },
]

export default routes
