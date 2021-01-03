import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFilters } from '../hooks'
import { Row, Col } from 'react-bootstrap'
import Search from './Search'
import HackerSearchResult from './HackerSearchResult'
import Banner from './Banner'
import KnowHowPanel from './KnowHowPanel'
import TeamPanel from './TeamPanel'

const Hackers = () => {
  const [filters, onChange] = useFilters()
  const [team, setTeam] = useState([])

  const employees = useSelector(state => state.employees)

  const filterContains = skill => filters.length === 0 ||
    filters.some(filter => skill.name.toLowerCase() === filter.toLowerCase())

  const hasAllOfSkills = employee =>
    filters.every(filter => employee.skills.some(skill =>
      skill.name.toLowerCase() === filter.toLowerCase()))

  const employeesToShow = employees.filter(hasAllOfSkills)

  const handleAddToTeam = hacker => {
    setTeam([...new Set(team.concat(hacker))])
  }

  const handleRemoveFromTeam = hacker => {
    setTeam(team.filter(e => e.id !== hacker.id))
  }
  
  return (
    <>
    <Row>
      <Banner text='Rakenna tiimi' />
    </Row>
    <Row>
      <Col>
        <Search id='filter-hackers-field' onChange={onChange} placeholder='java, mule, python ...' />
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={4}>
        <TeamPanel team={team} handleRemoveFromTeam={handleRemoveFromTeam} />
      </Col>
      <Col xs={12} md={4}>
        <HackerSearchResult employees={employeesToShow} filterContains={filterContains} handleAddToTeam={handleAddToTeam} />
      </Col>
      <Col xs={12} md={4}>
        <KnowHowPanel team={team} />
      </Col>
    </Row>
    </>
  )
}

export default Hackers