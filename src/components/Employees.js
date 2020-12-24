import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Employee from './Employee'

const Employees = () => {
  const employees = useSelector(state => state.employees)
  console.log(employees)

  return (
    <Row>
      <Col>
        {employees && employees.map(employee => 
          <Employee key={employee.lastname} employee={employee} />    
        )}
      </Col>
    </Row>
  )
}

export default Employees