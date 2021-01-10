import React from 'react'
import NavButtons from './NavButtons.js'

import UIfx from 'uifx'

import sf1 from '../assets/sfx1.mp3'
import sf2 from '../assets/sfx2.wav'
import themesong from '../assets/themesong.wav'

export default function WelcomePage () {
  // create variables to hold theme music/ sfx on page load
  const theme = new UIfx(themesong)
  const beep = new UIfx(sf1)
  const blorp = new UIfx(sf2)

  return (
    <>
      <div className='ui-center-large'>
        <h1>Rick &amp; Morty Fan Page</h1>
      </div>
      <h4>Wubba Lubba Dub Dubbzzz!</h4>
      <NavButtons theme={theme} sf1={beep} sf2={blorp} />
      <img
        className='main-img'
        src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        alt='rick'
      />
      <h3 className='ui-center'>
        Welcome to the ultimate fan site mother fuckers!
      </h3>
    </>
  )
}
