import React from 'react'
import Button from '../button/Button'

import chevronDown from '../../images/chevron-down-white.svg'
import chevronUp from '../../images/chevron-up.svg'

import './ExpandingPanel.scss'

const ExpandingPanel = ({ title, handleOpen, open, children }) => {
  const [isOpen, setIsOpen] = React.useState(open)

  return (
    <div className="expanding-panel-container">
      <div
        className="notification-panel expanding-panel-header"
        style={{
          backgroundColor: isOpen ? 'var(--tertiary-color)' : 'var(--secondary-color)',
          color: isOpen ? '#000033' : 'var(--text-color)',
          borderBottom: isOpen ? '1px solid var(--tertiary-color)' : 'none',
        }}
      >
        <div className="expanding-panel-title">{title}</div>
        <Button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          classes={{
            'explore-button': true,
          }}
        >
          {isOpen ? (
            <div>
              <img src={chevronUp} alt="Close" />
            </div>
          ) : (
            <div>
              <img src={chevronDown} alt="Explore" />
            </div>
          )}
        </Button>
      </div>
      {isOpen && children}
    </div>
  )
}

export default ExpandingPanel
