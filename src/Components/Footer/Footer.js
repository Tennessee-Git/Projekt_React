import React from 'react'
import './Footer.css'

function Footer() {
    return (
      <div className="main-footer">
          <p>
            &copy;{new Date().getFullYear()} Komponenty REACT | All rights reserved
          </p>
      </div>
    )
}

export default Footer
