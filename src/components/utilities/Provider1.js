import React, { useState, useEffect } from 'react'

export const Provider1 = props => {
  const [sounds, setSounds] = useState()
  // create variables to hold theme music/ sfx on page load
  const sfx1 = new UIfx(sf1)
  const sfx2 = new UIfx(sf2)
  const theme = new UIfx(themesong)

  const [isLoading, setIsLoading] = useState(false)
  const [episodes, setEpisodes] = useState([])
  const [query, setQuery] = useState('')
  const [activePage, setActivePage] = useState()
  const [count, setCount] = useState()
  const [pages, setPages] = useState()

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

  // useEffect call to run an episodes query for searching by name
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

  // useEffect call for pagination info from the API for episodes
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?page=${activePage}`)
      .then(setIsLoading(true))
      .then(res => {
        console.log('API data: ', res.data)
        console.log('pages prop in LocationsList component: ', pages)
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

  // useEffect call to set sound FX to an array
  useEffect(() => {
    setSounds([sfx1, sfx2, theme])
  }, [])

  return (
    <ApiContext.Provider
      value={{
        sounds: sounds,
        handlePageChange: handlePageChange,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        episodes: episodes,
        setQuery: setQuery,
        activePage: activePage,
        count: count,
        pages: pages
      }}
    >
      {props.children}
    </ApiContext.Provider>
  )
}

export const Context1 = React.createContext()
