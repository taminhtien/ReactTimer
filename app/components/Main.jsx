import React from 'react'
import Navigation from 'Navigation'

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
					<Navigation />
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
