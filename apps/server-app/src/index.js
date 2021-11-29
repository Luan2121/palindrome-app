import express from 'express'
import cors from 'cors'
import palindromeRouter from './routes/palindrome.routes'

const app = express()
const { PORT } = process.env

app.use(cors())

app.use('/', palindromeRouter)

app.listen(PORT || 4000, () => console.log(`App is listening on port ${PORT}! Have fun! 🥳`))
