export const passwordLength = (data, min = 6, max = 16) => {
  if (data.current && data.current.value) {
    const value = data.current.value
    const conditionLength = new RegExp(`^[\\w\\W]{${min},${max}}$`)
    const hasTotalCharacters = value.match(conditionLength)
    return hasTotalCharacters ? 'valid' : 'invalid'
  }
  return 'empty'
}

export const passwordNumber = (data) => {
  if (data.current && data.current.value) {
    const value = data.current.value
    const hasNumber = value.match(/\d/)
    return hasNumber ? 'valid' : 'invalid'
  }
  return 'empty'
}

export const passwordCapitalLetter = (data) => {
  if (data.current && data.current.value) {
    const value = data.current.value
    const hasCapitalLetter = value.match(/[A-Z]/)
    return hasCapitalLetter ? 'valid' : 'invalid'
  }
  return 'empty'
}

export const passwordSpecial = (data) => {
  if (data.current && data.current.value) {
    const value = data.current.value
    const hasSpecial = value.match(/\W/)
    return hasSpecial ? 'valid' : 'invalid'
  }
  return 'empty'
}


export const statusInput = (data) => {
  if (data) {
    const status = Object.keys(data)
    .map(step => data[step])
    .filter(item => item === 'valid' )

    return {
      1: 'isWeak',
      2: 'isMedium',
      3: 'isStrong'
    }[status.length] || 'isEmpty'
  }
  return 'isEmpty'
}