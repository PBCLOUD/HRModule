import React, { useContext } from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { UserContext } from '../context/UserContext'

const TheHeaderDropdownNotif = () => {
  const { user, groupType } = useContext(UserContext)
  const itemsCount = 5
  return (
    <CDropdown inNav className='c-header-nav-item mx-2'>
      Hello, {user.username}
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif
