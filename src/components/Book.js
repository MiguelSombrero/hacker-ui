import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Book = ({ book }) => {

  const handleClick = () => {

  }
  
  return (
    <ListGroup.Item action onClick={handleClick} >
      {book.name}
    </ListGroup.Item>    
  )
}

export default Book