import React, { useState } from 'react'

//
// This component encapsulates the search functionality. It caputures the input from the text box, and sends that to its parent compoinent, which then fires a useEffect call, appending the query variable to the URL
//

const SearchForm = props => {
  console.log('props in the SearchForm component: ', props)

  const [query, setQuery] = useState('')

  const [placeholder, setPlaceholder] = useState(props.name)

  const handleChanges = e => {
    e.preventDefault()
    console.log(e)
    setQuery(e.target.value)
  }

  const resetInputField = () => {
    setQuery('')
    setPlaceholder('Please Enter A Character To Search')
  }

  const submitSearch = event => {
    event.preventDefault()
    const e = event.target.value
    if (e === undefined) {
      resetInputField()
    } else {
      props.search(query)
      resetInputField()
    }
  }
  return (
    <form>
      <input
        className='search-bar'
        value={query}
        type='text'
        onChange={e => handleChanges(e)}
        placeholder={placeholder}
      />
      <input
        className='search-button'
        onClick={submitSearch}
        type='submit'
        value='SEARCH'
      />
    </form>
  )
}

export default SearchForm
