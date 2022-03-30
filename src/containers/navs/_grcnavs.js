import React from 'react'
import CIcon from '@coreui/icons-react'

const _grcnavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'GrcTeam',
    to: '/grcteam',
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

export default _grcnavs
