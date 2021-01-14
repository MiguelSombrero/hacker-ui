import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFilters } from '../hooks'
import { Row, Col } from 'react-bootstrap'
import { skillBySumOfKnowHows } from '../functions/reducers'
import SearchBar from './SearchBar'
import HackerSearchResult from './HackerSearchResult'
import KnowHowPanel from './KnowHowPanel'
import TeamPanel from './TeamPanel'

const Hackers = () => {
  const [filters, onChange] = useFilters()
  const [team, setTeam] = useState([])

  const hackers = useSelector(state => state.hackers)

  const filtersContainsSkill = skill => filters.length === 0 ||
    filters.some(filter =>
      skill.name.toLowerCase().includes(filter.toLowerCase()))

  const hasAllOfSkills = hacker =>
    filters.every(filter =>
      hacker.skills.some(skill =>
        skill.name.toLowerCase().includes(filter.toLowerCase())))

  const bySumOfFilteredSkills = (a, b) => {
    const sumA = a.skills.filter(filtersContainsSkill).reduce(skillBySumOfKnowHows, 0)
    const sumB = b.skills.filter(filtersContainsSkill).reduce(skillBySumOfKnowHows, 0)

    return (sumA > sumB) ? -1 : 1
  }

  const hackersToShow = hackers
    .filter(hasAllOfSkills)
    .sort(bySumOfFilteredSkills)

  const handleAddToTeam = hacker => {
    setTeam([...new Set(team.concat(hacker))])
  }

  const handleRemoveFromTeam = hacker => {
    setTeam(team.filter(e => e.id !== hacker.id))
  }

  return (
    <>
      <SearchBar id='filter-hackers-field' onChange={onChange} title='Etsi osaajia' placeholder='java, mule, python ...' />
      <Row>
        <Col xs={12} md={4}>
          {hackersToShow.map(hacker =>
            <HackerSearchResult key={hacker.id} hacker={hacker} skills={hacker.skills.filter(filtersContainsSkill)} handleAddToTeam={handleAddToTeam} />
          )}
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={6}>
              <TeamPanel team={team} handleRemoveFromTeam={handleRemoveFromTeam} />
            </Col>
            <Col xs={12} md={6}>
              <KnowHowPanel team={team} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Hackers