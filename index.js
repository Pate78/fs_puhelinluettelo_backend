require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const Contact = require('./models/contact')
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let contacts = []
//     { name: 'Arto Hellas', number: '040-123456', id: 0 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 2},
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
// ]

//Mongoose

//

let currentdate = new Date()
let datetime = 'Last Sync: ' + currentdate.getDate() + '/'
                + (currentdate.getMonth()+1)  + '/'
                + currentdate.getFullYear() + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds()

app.get('/api/persons', (req, res) => {
  Contact.find({}).then(contacts => {
    res.json(contacts)
  })
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${contacts.length+1} people <br />
    ${datetime}`).end()
})

app.get('/api/persons/:id', (req, res, next) => {
  // res.json(contacts.find(c => c.id === req.body.id))
//   const id = Number(req.params.id)
//   const contact = contacts.find(c => c.id === id)
  Contact.findById(req.params.id)
    .then(c => {
      if(c) {
        res.json(c)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req,res,next) => {
  const id = Number(req.params.id)
  contacts.splice(id)
  Contact.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons', (req,res,next) => {
  const newContact = req.body
  const foundContact = contacts.find(c => c.name === newContact.name)
  console.log('Found contact: ',foundContact)
  // console.log(newContact)
  // eslint-disable-next-line no-irregular-whitespace
  if(newContact === undefined || newContact.number === undefined || newContact.name === undefined || foundContact !== undefined) {
    return res.status(400).json({ error: 'Name must be unique' })
  } else {
    const contact = new Contact({
      name: newContact.name,
      number: newContact.number
    })
    contact.save().then(savedContact => {
      contacts.push(savedContact)
      res.json(savedContact)
    })
      .catch(error => next(error))
  }

})
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.log(error.name)
  if(error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if ( error.name === 'ValidationError' ) {
    return res.status(400).json({ error: error.message })
  } else if ( error.name === 'MongoServerError' ) {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}

// Tämä kaikkien muiden middleware määrittelyjen jälkeen
app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})