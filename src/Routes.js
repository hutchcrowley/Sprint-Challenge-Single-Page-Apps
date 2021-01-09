import React from 'react'
import { Route, Switch } from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import CharacterList from './components/characters/CharacterList'
import LocationsList from './components/locations/LocationsList'
import EpisodeList from './components/episodes/EpisodeList'
import NoRoute from './components/NoRoute'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Routes = () => {
  return (
    <div className='main-wrapper'>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/locations' component={LocationsList} />
        <Route path='/episodes' component={EpisodeList} />
        <Route component={NoRoute} />
      </Switch>
    </div>
  )
}

export default Routes
