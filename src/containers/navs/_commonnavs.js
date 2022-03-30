import React from 'react'
import CIcon from '@coreui/icons-react'

const _commonnavs = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Profile',
    to: '/profile',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    badge: {
      color: 'info',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Colleagues',
    to: '/prplbx-employees',
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

export default _commonnavs
