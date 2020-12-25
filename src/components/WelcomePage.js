import React from 'react'
import NavButtons from './NavButtons.js'
import UIfx from 'uifx'
import themesong from '../assets/themesong.wav'

export default function WelcomePage () {
  const theme = new UIfx(themesong)

  theme.setVolume(0.2).play()

  return (
    <section className='main-wrapper'>
      <>
        <div className='ui-center-large'>
          <h1>Rick &amp; Morty Fan Page</h1>
        </div>
        <img
          className='main-img'
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='rick'
        />
        <h4>Wubba Lubba Dub Dubbzzz!</h4>
        <NavButtons />
        <h3 className='ui-center'>
          Welcome to the ultimate fan site mother fuckers!
        </h3>
      </>
    </section>
  )
}
