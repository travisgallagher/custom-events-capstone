// @ts-nocheck
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const {SERVER_PORT} = process.env

const {getEvents, createEvent, deleteEvent, getEmployees, createEmployee, deleteEmployee} = require('./controller.js')

app.use(express.json())
app.use(cors())

// Events

app.get('/events', getEvents)
app.post('/events', createEvent)
app.delete('/events/:eventid', deleteEvent)

// Employees

app.get('/employees', getEmployees)
app.post('/employees', createEmployee)
app.delete('/employees/:employeeid', deleteEmployee)

//





app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))