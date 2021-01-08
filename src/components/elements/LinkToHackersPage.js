import React from 'react'
import { Link } from 'react-router-dom'

const LinkToHackersPage = ({ hacker }) =>
  <Link to={`/hackers/${hacker.id}`}>
    {[hacker.firstname, hacker.lastname].join(' ')}
  </Link>

export default LinkToHackersPage