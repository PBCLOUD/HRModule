import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        Prplbx HR
        <span className='ml-1'>&copy; 2021 </span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
