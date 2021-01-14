// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

const java1 = {
  name: 'Java',
  knowHowMonths: 1
}

const java2 = {
  name: 'Java',
  knowHowMonths: 2
}

const java3 = {
  name: 'Java',
  knowHowMonths: 3
}

const python4 = {
  name: 'Python',
  knowHowMonths: 4
}

const python5 = {
  name: 'Python',
  knowHowMonths: 5
}

const mule10 = {
  name: 'Mule',
  knowHowMonths: 10
}

const employee6 = {
  firstName: 'Miika',
  lastName: 'Somero',
  skills: [java1, java2, java3]
}

const employee9 = {
  firstName: 'Testi',
  lastName: 'Testinen',
  skills: [python4, python5]
}

const book50 = {
  name: 'The Selfish Gene',
  rating: 5.0
}

const book47 = {
  name: 'The Scrum Fieldbook',
  rating: 4.7
}

const book40 = {
  name: 'Katrina',
  rating: 4.0
}

const book29 = {
  name: 'Apocalypse Now',
  rating: 2.9
}

export default {
  java1, java2, java3, python4, python5, mule10,
  employee6, employee9,
  book29, book40, book47, book50
}