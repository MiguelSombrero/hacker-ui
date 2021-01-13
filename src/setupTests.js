// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

const java10 = {
  name: 'Java',
  knowHowMonths: 10
}

const java9 = {
  name: 'Java',
  knowHowMonths: 9
}

const java2 = {
  name: 'Java',
  knowHowMonths: 2
}

const python35 = {
  name: 'Python',
  knowHowMonths: 35
}

const python7 = {
  name: 'Python',
  knowHowMonths: 7
}

const mule12 = {
  name: 'Mule',
  knowHowMonths: 12
}

const employee37 = {
  firstName: 'Miika',
  lastName: 'Somero',
  skills: [python35, java2]
}

const employee28 = {
  firstName: 'Testi',
  lastName: 'Testinen',
  skills: [java10, java9, java2, python7]
}

export default {
 java10, java2, java9, python35, python7, mule12,
 employee37, employee28
}