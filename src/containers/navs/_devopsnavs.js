import React from 'react'
import CIcon from '@coreui/icons-react'

const _devopsnavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'DevOpsTeam',
    to: '/devopsteam',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },

  //bosluk veriyor panelde
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-3',
  },
]

export default _devopsnavs
