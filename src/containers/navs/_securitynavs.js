import React from 'react'
import CIcon from '@coreui/icons-react'

const _securitynavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'SecurityTeam',
    to: '/securityteam',
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

export default _securitynavs
