import React from 'react'
import moment from 'moment'
import { Table } from 'react-bootstrap'

const ProjectsTable = ({ projects }) =>
  <Table striped bordered hover size="sm" responsive>
    <thead>
      <tr>
        <th>Projektin nimi</th>
        <th>Alkamispäivä</th>
        <th>Päättymispäivä</th>
        <th>Kuvaus</th>
      </tr>
    </thead>
    <tbody>
      {projects.map(project =>
        <tr key={project.id} >
          <td>{project.name}</td>
          <td>{moment(project.start).format('DD.MM.YYYY')}</td>
          <td>{moment(project.end).format('DD.MM.YYYY')}</td>
          <td>{project.description}</td>
        </tr>
      )}
    </tbody>
  </Table>

export default ProjectsTable