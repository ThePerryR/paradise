import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import path from 'path'
import favicon from 'serve-favicon'

import serveApp from './utils/serveApp'

dotenv.config()

/*
 * Initialize Application
 */
const app = express()
app.set('trust proxy')
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log(`Serving from http://0.0.0.0:${app.get('port')}`))

/* Serve Static Content */
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, '../dist/public')))

/* Logging Middleware */
app.use(logger('dev'))

/* Security Middleware */
app.use(helmet())

/* Parsing Middleware */
app.use(bodyParser.json())
app.use(cookieParser())

app.get('*', serveApp)

export default app
