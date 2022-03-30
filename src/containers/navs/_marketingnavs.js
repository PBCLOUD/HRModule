import React from 'react'
import CIcon from '@coreui/icons-react'

const _marketingnavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'MarketingTeam',
    to: '/marketingteam',
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

export default _marketingnavs
