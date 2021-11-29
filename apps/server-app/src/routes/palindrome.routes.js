import { Router } from 'express'
import { reverseString, isPalindrome } from '../utils'

const palindromeRouter = Router()

palindromeRouter.get('/iecho', (req, res) => {
  const { text } = req.query
  if (!text) {
    res.status(400).json({ text: 'no text' })
    return
  }

  const reversedString = reverseString(text)
  const palindrome = isPalindrome(text)

  res.status(200).json({
    text: reversedString,
    palindrome
  })
})

palindromeRouter.get('/', (req, res) => {
  res.send(' 🌈 Welcome to palindrome API 🌈 ')
})

export default palindromeRouter
