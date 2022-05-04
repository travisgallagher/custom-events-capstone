// @ts-nocheck
require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {

    getEvents: (req, res) => {
        sequelize.query(`
            SELECT * FROM event;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err)) 
    }, 

    createEvent: (req, res) => {
        let {eventName, eventDate, eventTime, address, city, state, zipcode} = req.body; 
        console.log(req.body);

        sequelize.query(`
            INSERT INTO event(eventname, eventdate, eventtime, address, city, state, zipcode)
            VALUES ('${eventName}', '${eventDate}','${eventTime}', '${address}', '${city}', '${state}', ${zipcode})
            RETURNING *; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    deleteEvent: (req, res) => {
        let {eventId} = req.params;

        sequelize.query(`
            DELETE
            FROM event
            WHERE eventid = ${eventId}; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getEmployees: (req, res) => {
        sequelize.query(`
            SELECT * FROM employee; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }, 

    createEmployee: (req, res) => {
        let {isPartTime, fName, lName, empAge, phone, email, address, city, state, zipcode, empPay} = req.body;
        console.log(req.body);

        sequelize.query(`
            INSERT INTO employee (isparttime, fname, lname, empage, phone, email, address, city, state, zipcode, emppay)
            VALUES (${isPartTime},'${fName}', '${lName}', ${empAge}, '${phone}', '${email}', '${address}', '${city}', '${state}', ${zipcode}, ${empPay})
            RETURNING *; 
        `)
    }, 
    
    deleteEmployee: (req, res) => {
        let {employeeId} = req.params;

        sequelize.query(`
            DELETE 
            FROM employee
            WHERE employeeid = ${employeeId}; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}; 