import React from 'react'
import { Link, IndexLink } from 'react-router'

const Navigation = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="action" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="action" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Created by <a href='https://taminhtien.github.io' target='_blank'>Tom Ta</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
