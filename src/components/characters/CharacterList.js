import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import SearchForm from '../SearchForm'
import Spinner from '../Spinner'

import Pagination from 'react-js-pagination'
// custom hook to approximate prevState functionality in a functional component
// import usePrevious from '../utilities/usePrevious'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const CharacterList = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState('')
  const [activePage, setActivePage] = useState(null)
  const [count, setCount] = useState(null)
  const [pages, setPages] = useState()

  // TODO: re-factor this code remove api calls to outside of useEffect and save values in state before conditional rendering

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(setIsLoading(true))
      .then(res => {
        console.log('Data From the API: ', res.data)
        console.log('Info From the API: ', res.data.info)
        setCount(res.data.info.count)
        setCharacters(res.data.results)
        setPages(res.data.info.pages)
        setIsLoading(false)
      })
      .catch(err => {
        console.log('Error, data was not returned from server', err)
        setIsLoading(false)
      })
  }, [query])

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${activePage}`)
      .then(setIsLoading(true))
      .then(res => {
        console.log('From the pagination useEffect call: ', res.data)
        setCount(res.data.info.count)
        setCharacters(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        console.log('Error: data not returned from API', err)
        setIsLoading(false)
      })
  }, [activePage])

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`)
    setActivePage(pageNumber)
  }

  return !isLoading ? (
    <section className='list-wrap'>
      <h1>Character List</h1>
      <input className='home-btn'>
        <NavLink to='/'>Home</NavLink>
      </input>
      <div className='search-form-wrap'>
        <SearchForm search={setQuery} name='Enter Character' />
      </div>
      <div className='results-display'>
        <h4>Results:</h4>
        <h3>{count}</h3>
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={20}
        totalItemsCount={pages}
        onChange={handlePageChange}
        itemClass='page-item'
        linkClass='page-link'
      />
      <div className='character-list'>
        {characters.map(character => {
          return (
            <div key={character.id}>
              <CharacterCard
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                type={character.type}
                gender={character.gender}
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

export default CharacterList
