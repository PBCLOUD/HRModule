import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

const DevopsTeam = React.lazy(() => import('../views/devopsteam/DevopsTeam'))

const devopsRoutes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  {
    path: '/devopsteam',
    exact: true,
    name: 'DevopsTeam',
    component: DevopsTeam,
  },
]

export default devopsRoutes
