import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Auth } from 'aws-amplify'
// routes config
// routes config
import adminRoutes from '../routes/adminRoutes'
import securityRoutes from '../routes/securityRoutes'
import marketingRoutes from '../routes/marketingRoutes'
import grcRoutes from '../routes/grcRoutes'
import devopsRoutes from '../routes/devopsRoutes'
import commonRoutes from '../routes/commonRoutes'

import { TheHeaderDropdown, TheHeaderDropdownMssg, TheHeaderDropdownNotif, TheHeaderDropdownTasks } from './index'
import { UserContext } from '../context/UserContext'
const TheHeader = () => {
  const { user, groupType } = useContext(UserContext)
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [localRoutes, setLocalRoutes] = useState(
    ((groupType === 'Admins'
      ? adminRoutes
      : groupType === 'SecurityTeam'
      ? securityRoutes
      : groupType === 'MarketingTeam'
      ? marketingRoutes
      : groupType === 'GrcTeam'
      ? grcRoutes
      : groupType === 'DevOpsTeam'
      ? devopsRoutes
      : null): null)
  )
  const [totalRoutes, setTotalRoutes] = useState(localRoutes.concat(commonRoutes))
  console.log(localRoutes)
  console.log(commonRoutes)
  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  return (
    <CHeader withSubheader>
      <CToggler inHeader className='ml-md-3 d-lg-none' onClick={toggleSidebarMobile} />
      <CToggler inHeader className='ml-3 d-md-down-none' onClick={toggleSidebar} />
      <CHeaderBrand className='mx-auto d-lg-none' to='/'>
        <CIcon name='logo' height='48' alt='Logo' />
      </CHeaderBrand>
      {groupType === 'Admins' ? (
        <CHeaderNav className='d-md-down-none mr-auto'>
          <CHeaderNavItem className='px-3'>
            <CHeaderNavLink to='/users'>Employee Management</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      ) : (
        <CHeaderNav className='d-md-down-none mr-auto'>
          <CHeaderNavItem className='px-3'>
            <CHeaderNavLink></CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      )}

      <CHeaderNav className='px-3'>
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className='px-3 justify-content-between'>
        <CBreadcrumbRouter className='border-0 c-subheader-nav m-0 px-0 px-md-3' routes={totalRoutes} />
        <div className='d-md-down-none mfe-2 c-subheader-nav'></div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
