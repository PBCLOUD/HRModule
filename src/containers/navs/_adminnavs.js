import React from 'react'
import CIcon from '@coreui/icons-react'

const _adminnavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'SecurityTeam',
    to: '/securityteam',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'DevOpsTeam',
    to: '/devopsteam',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'GrcTeam',
    to: '/grcteam',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'MarketingTeam',
    to: '/marketingteam',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'ManagementTeam',
    to: '/managementteam',
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

  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Raporlar',
  //   to: '/raporlar',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger',
  //   },
  // },
]

export default _adminnavs
