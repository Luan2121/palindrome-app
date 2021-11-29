const reverseString = str => {
  if (typeof str !== 'string') {
    return ''
  }
  return str.split('').reverse().join('')
}

const parseText = str => {
  if (typeof str !== 'string') {
    return ''
  }

  const nonSpecialCharactersRegex = /[^a-zA-Z0-9]/g
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(nonSpecialCharactersRegex, '')
}

const isPalindrome = text => {
  const parsedText = parseText(text)
  const reversedText = reverseString(parsedText)
  return reversedText === parsedText
}

export { reverseString, isPalindrome }
