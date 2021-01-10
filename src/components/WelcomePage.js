import React from 'react'
import NavButtons from './NavButtons.js'

import sf1 from '../assets/sfx1.mp3'
import sf2 from '../assets/sfx2.wav'
import themesong from '../assets/themesong.wav'

import UIfx from 'uifx'

export default function WelcomePage () {
  // create variables to hold theme music/ sfx on page load
  const sfx1 = new UIfx(sf1)
  const sfx2 = new UIfx(sf2)
  const theme = new UIfx(themesong)

  theme.setVolume(0.04).play()

  return (
    <>
      <div className='ui-center-large'>
        <h1>Rick &amp; Morty Fan Page</h1>
      </div>
      <h4>Wubba Lubba Dub Dubbzzz!</h4>
      <NavButtons theme={theme} sf1={sfx1} sf2={sfx2} />
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
