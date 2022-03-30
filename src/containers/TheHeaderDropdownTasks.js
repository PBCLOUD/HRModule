import React from 'react'
import {
  CBadge,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from '@coreui/react'
import { Button } from 'reactstrap'
import CIcon from '@coreui/icons-react'
import { Auth } from 'aws-amplify'

const TheHeaderDropdownTasks = () => {
  const itemsCount = 5
  return (
    <CDropdown inNav className='c-header-nav-item mx-2'>
      <Button
        onClick={() => {
          Auth.signOut()
          window.location.reload()
        }}
      >
        Sign Out
      </Button>
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks
