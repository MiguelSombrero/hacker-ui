import React from 'react'
import { ListGroup, Card, Accordion } from 'react-bootstrap'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import LinkToBooksPage from './elements/LinkToBooksPage'

const Hackcordion = ({ bookReviews, courseReviews, skills }) =>
  <Accordion className='mb-2' >
    <Card className='mb-2'>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <Card.Title className='text-center' style={{ color: 'blue' }}>Kirja-arvostelut</Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        {bookReviews && bookReviews.length > 0 ?
          <ListGroup variant='flush'>
            {bookReviews.map(review =>
              <ListGroup.Item key={review.id} >
                <LinkToBooksPage book={review.book} />
              </ListGroup.Item>
            )}
          </ListGroup>
          : <Card.Body>Ei kirja-arvosteluja</Card.Body>
        }
      </Accordion.Collapse>
    </Card>
    <Card className='mb-2'>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        <Card.Title className='text-center' style={{ color: 'blue' }}>Kurssi-arvostelut</Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        {courseReviews && courseReviews.length > 0 ?
          <ListGroup variant='flush'>
            {courseReviews.map(review =>
              <ListGroup.Item key={review.id} >
                {review.course.name}
              </ListGroup.Item>
            )}
          </ListGroup>
          : <Card.Body>Ei kurssi-arvosteluja</Card.Body>
        }
      </Accordion.Collapse>
    </Card>
    <Card className='mb-2'>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        <Card.Title className='text-center' style={{ color: 'blue' }}>Osaaminen</Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        {skills && skills.length > 0 ?
          <ListGroup variant='flush'>
            {skills && skills.sort(skillByKnowHow).map(skill =>
              <ListGroup.Item key={skill.id} >
                {skill.name}<span style={{ float:'right' }}>{roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}</span>
              </ListGroup.Item>
            )}
          </ListGroup>
          : <Card.Body>Ei osaamista</Card.Body>
        }
      </Accordion.Collapse>
    </Card>
  </Accordion>

export default Hackcordion