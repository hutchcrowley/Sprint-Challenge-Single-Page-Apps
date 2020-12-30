import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavButtons (props) {
  //  set volume of the new sound  and play after page loads
  props.theme.setVolume(0.572).play()

  return (
    <div className='nav-buttons'>
      <NavLink to='/characters'>
        <button
          className='view-characters-btn'
          onClick={() => props.beep.play()}
        >
          View Characters
        </button>
      </NavLink>
      <NavLink to='/locations'>
        <button
          className='view-characters-btn'
          onClick={() => props.blorp.play()}
        >
          View Locations
        </button>
      </NavLink>
    </div>
  )
}
