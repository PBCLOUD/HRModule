import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import { UserContext } from '../context/UserContext'

import CIcon from '@coreui/icons-react'

import logo from '../assets/prplbxlogosidebar.png'

// sidebar nav config
import adminnavs from './navs/_adminnavs'
import devopsnavs from './navs/_devopsnavs'
import grcnavs from './navs/_grcnavs'
import marketingnavs from './navs/_marketingnavs'
import securitynavs from './navs/_securitynavs'
import commonnavs from './navs/_commonnavs'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector((state) => state.sidebarShow)
  const { user, groupType } = useContext(UserContext)
  const [localNavs, setLocalavs] = useState(
    ((groupType === 'Admins'
      ? adminnavs
      : groupType === 'SecurityTeam'
      ? securitynavs
      : groupType === 'MarketingTeam'
      ? marketingnavs
      : groupType === 'GrcTeam'
      ? grcnavs
      : groupType === 'DevOpsTeam'
      ? devopsnavs
      : null): null)
  )

  const [totalNavs, setTotalNavs] = useState(commonnavs.concat(localNavs))
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand
        className='d-md-down-none'
        to='/'
        style={{ backgroundColor: 'rgb(76, 54, 140)' }}
      >
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <span
          style={{
            color: '#fff',
            background: 'cornsilk',
            width: '-webkit-fill-available',
            marginBlockEnd: 'auto',
          }}
        >
          <img src={logo} style={{ width: '200px', paddingLeft: '15px' }}></img>
        </span>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={totalNavs}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className='c-d-md-down-none' />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
