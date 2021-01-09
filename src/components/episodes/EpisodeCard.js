import React from 'react'
import Card from 'react-bootstrap/Card'

const EpisodeCard = ({
  key,
  episodename,
  airdate,
  episode,
  characters,
  link
}) => {
  return (
    <>
      <Card key={key}>
        <Card.Body>
          <h2>{episodename}</h2>
          <h3 className='card-text-h3'>Airdate: </h3>
          <h4>{airdate}</h4>
          <h3 className='card-text-h3'> Episode: </h3>
          <h4>{episode}</h4>
          {/* <h3 className='card-text-h3'> Characters: </h3>
          <h4>{characters}</h4> */}
          <a href={link}>episode info</a>
        </Card.Body>
      </Card>
    </>
  )
}

export default EpisodeCard
