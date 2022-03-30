import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

const MarketingTeam = React.lazy(() =>
  import('../views/marketingteam/MarketingTeam')
)

const marketingRoutes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  {
    path: '/marketingteam',
    exact: true,
    name: 'MarketingTeam',
    component: MarketingTeam,
  },
]

export default marketingRoutes
