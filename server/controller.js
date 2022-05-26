// @ts-nocheck
require('dotenv').config()
const { type } = require('@testing-library/user-event/dist/type');
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
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
        let {isPartTime, fName, lName, empAge, phone, email, address, city, state, zipcode, empPay,isEventManager} = req.body.data;
        const sql = `INSERT INTO employee (isparttime, fname, lname, empage, phone, email, address, city, state, zipcode, emppay, iseventmanager)
        VALUES (${isPartTime},'${fName}', '${lName}', ${empAge}, '${phone}', '${email}', '${address}', '${city}', '${state}', ${zipcode}, ${empPay}, ${isEventManager}) RETURNING *`
        sequelize.query(sql,{type: sequelize.QueryTypes.INSERT})
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch((err) => {console.error(err)})
    },
    
    deleteEmployee: (req, res) => {
        let {employeeid} = req.params;
        sequelize.query(`
            DELETE 
            FROM employee
            WHERE employeeid = ${employeeid}; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}; 