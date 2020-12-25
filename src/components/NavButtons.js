import React from 'react'
import UIfx from 'uifx'
import sfx1 from '../assets/sfx1.mp3'
import sfx2 from '../assets/sfx2.wav'
import { NavLink } from 'react-router-dom'

export default function NavButtons () {
  const beep = new UIfx(sfx1)
  const blorp = new UIfx(sfx2)

  return (
    <div className='nav-buttons'>
      <NavLink to='/characters'>
        <button className='view-characters-btn' onClick={() => beep.play()}>
          View Characters
        </button>
      </NavLink>
      <NavLink to='/locations'>
        <button className='view-characters-btn' onClick={() => blorp.play()}>
          View Locations
        </button>
      </NavLink>
    </div>
  )
}
