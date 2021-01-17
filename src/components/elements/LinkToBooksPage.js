import React from 'react'
import { Link } from 'react-router-dom'

const LinkToBooksPage = ({ book }) =>
  <Link to={`/books/${book.id}`}>
    {book.name + ' (' + book.type.name + ')'}
  </Link>

export default LinkToBooksPage