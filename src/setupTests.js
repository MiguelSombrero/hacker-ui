// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

const java1 = {
  id: 1,
  name: 'Java',
  knowHowMonths: 1
}

const java2 = {
  id: 2,
  name: 'Java',
  knowHowMonths: 2
}

const java3 = {
  id: 3,
  name: 'Java',
  knowHowMonths: 3
}

const python4 = {
  id: 4,
  name: 'Python',
  knowHowMonths: 4
}

const python5 = {
  id: 5,
  name: 'Python',
  knowHowMonths: 5
}

const mule10 = {
  id: 6,
  name: 'Mule',
  knowHowMonths: 10
}

const book50 = {
  id: 1,
  name: 'The Selfish Gene',
  rating: 5.0
}

const book47 = {
  id: 2,
  name: 'The Scrum Fieldbook',
  rating: 4.7
}

const book40 = {
  id: 3,
  name: 'Katrina',
  rating: 4.0
}

const book29 = {
  id: 4,
  name: 'Apocalypse Now',
  rating: 2.9
}

const project8 = {
  id: 1,
  name: 'Eläkeuudistus 2017',
  start: '2019-05-01',
  end: '2019-12-01'
}

const project4 = {
  id: 1,
  name: 'Verkkokauppa',
  start: '2019-11-01',
  end: '2020-02-01'
}

const employee6 = {
  id: 1,
  firstName: 'Miika',
  lastName: 'Somero',
  skills: [
    {
      id: 1,
      name: 'Java',
      knowHowMonths: 1
    },
    {
      id: 2,
      name: 'Java',
      knowHowMonths: 2
    },
    {
      id: 3,
      name: 'Java',
      knowHowMonths: 3
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Eläkeuudistus 2017',
      start: '2019-05-01',
      end: '2019-12-01'
    }
  ]
}

const employee9 = {
  id: 2,
  firstName: 'Testi',
  lastName: 'Testinen',
  skills: [
    {
      id: 4,
      name: 'Python',
      knowHowMonths: 4
    },
    {
      id: 5,
      name: 'Python',
      knowHowMonths: 5
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Verkkokauppa',
      start: '2019-11-01',
      end: '2020-02-01'
    }
  ]
}

export default {
  java1, java2, java3, python4, python5, mule10,
  book29, book40, book47, book50,
  project4, project8,
  employee6, employee9,
}