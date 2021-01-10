import React, { useState, useEffect } from 'react'
import EpisodeCard from './EpisodeCard'
import SearchForm from '../SearchForm'
import Spinner from '../Spinner'

import Pagination from 'react-js-pagination'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
//
//
// API scema for listing episodes
// id - int - episode id
// name - string - episode name
// air_date - string - air date of episode
// episode - string - code of the epsisde
// characters - array - list of chracters who have been seen in the episode
// url - string - like to epsisode's endpoint
// created -= string - time at which episode was entered into db
//
//

export default function EpsiodeList () {
  const [isLoading, setIsLoading] = useState(false)
  const [episodes, setEpisodes] = useState([])
  const [query, setQuery] = useState('')
  const [activePage, setActivePage] = useState()
  const [count, setCount] = useState()
  const [pages, setPages] = useState()

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?name=${query}`)
      .then(setIsLoading(true))
      .then(res => {
        console.log('Data from the API: ', res.data)
        console.log('Info from the API: ', res.data.info)
        setEpisodes(res.data.results)
        setCount(res.data.info.count)
        setPages(res.data.info.pages)
        setIsLoading(false)
      })
      .catch(err => {
        console.log('Error, data not returned from API: ', err)
        setIsLoading(false)
      })
  }, [query])

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?page=${activePage}`)
      .then(setIsLoading(true))
      .then(res => {
        console.log('API data: ', res.data)
        setCount(res.data.info.count)
        setEpisodes(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        console.log('Error: data not returned from API: ', err)
        setIsLoading(false)
      })
  }, [activePage])

  // function to update active page
  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
  }

  return !isLoading ? (
    <section className='list-wrap'>
      <h1>Episode List</h1>
      <button className='home-btn'>
        <NavLink to='/'>Home</NavLink>
      </button>
      <div className='search-form-wrap'>
        <SearchForm search={setQuery} name='Enter Episode' />
      </div>
      <div className='results-display'>
        <h4>Results</h4>
        <h3>{count}</h3>
      </div>
      <Pagination
        activepage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={pages}
        onChange={handlePageChange}
        itemClass='page-item'
        linkClass='page-link'
      />
      <div className='episode-list'>
        {episodes.map(episode => {
          return (
            <div key={episode.id}>
              <EpisodeCard
                episodename={episode.name}
                airdate={episode.air_date}
                episode={episode.episode}
                characters={episode.characters}
                link={episode.url}
              />
            </div>
          )
        })}
      </div>
    </section>
  ) : (
    <Spinner />
  )
}
