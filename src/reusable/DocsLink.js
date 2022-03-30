import React from 'react'
import { CLink } from '@coreui/react'

const DocsLink = (props) => {
  const { name, text, ...rest } = props

  return (
    <div className='card-header-actions'>
      <CLink
        {...rest}
        href={props.href}
        rel='noreferrer noopener'
        target='_blank'
        className='card-header-action'>
        <small className='text-muted'>{text || 'docs'}</small>
      </CLink>
    </div>
  )
}

export default React.memo(DocsLink)
