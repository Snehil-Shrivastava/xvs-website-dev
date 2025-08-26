import React from 'react'

const Modal = ({isOpen}: {isOpen: boolean}) => {
  return (
    <div className='fixed inset-0 bg-neutral-950' style={{
      display: isOpen === true ? 'block' : 'none'
    }}>Modal</div>
  )
}

export default Modal