import React from 'react'
import { useSelector } from 'react-redux'
import { reviewByCreateDate } from '../functions/reducers'
import { Row, Col } from 'react-bootstrap'
import Banner from './Banner'
import HackOMeter from './HackOMeter'
import { Card } from 'react-bootstrap'
import LinkToHackersPage from './elements/LinkToHackersPage'

const FrontPage = () => {
  const bookReviews = useSelector(state => state.studies.bookReviews)
  const reviewCount = Object.values(bookReviews.reduce(reviewByCreateDate, {}))

  const hackers = useSelector(state => state.hackers
    .filter(hacker => hacker.skills.length === 0))

  return (
    <>
      <Row>
        <Banner text='Tervetuloa Hakkeri Portaaliin!' />
      </Row>
      <Row>
        <Col xs={12} md={4} >
          <h3 className='p-2 text-center'>Hack &apos;O meter</h3>
          <h5 className='p-2 text-center'>Luetut kirjat</h5>
          <p>Kuukausi<span style={{ float: 'right' }}>Arviot</span></p>
          <HackOMeter entries={reviewCount}/>
        </Col>
        <Col xs={12} md={6} >
          <h3>Hakkerit joilla saattaa olla projektien päivitystarpeita</h3>
          {hackers.map(hacker =>
            <Card key={hacker.id} className='mb-2'>
              <Card.Header>
                <Card.Title>
                  <LinkToHackersPage hacker={hacker} />
                </Card.Title>
              </Card.Header>
            </Card>
          )}
        </Col>
      </Row>
    </>
  )
}


export default FrontPage