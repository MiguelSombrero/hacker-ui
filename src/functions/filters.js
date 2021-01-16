const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1

const extractYear = date =>
  Number(date.substring(0, 4))

const extractMonth = date =>
  Number(date.substring(6, 7))

export const projectByNotEnded = project =>
  extractYear(project.end) === currentYear && extractMonth(project.end) === currentMonth