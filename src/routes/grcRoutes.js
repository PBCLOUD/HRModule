import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

const GrcTeam = React.lazy(() => import('../views/grcteam/GrcTeam'))

const grcRoutes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  {
    path: '/grcteam',
    exact: true,
    name: 'GrcTeam',
    component: GrcTeam,
  },
]

export default grcRoutes
