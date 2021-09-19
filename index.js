const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let contacts = [
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 2},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
]

let currentdate = new Date(); 
let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

app.get('/api/persons', (req, res) => {
    res.json(contacts)
})

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${contacts.length+1} people <br />
    ${datetime}`).end()
})

app.get('/api/persons/:id', (req, res) => {
    // res.json(contacts.find(c => c.id === req.body.id))
    const id = Number(req.params.id)
    const contact = contacts.find(c => c.id === id)

    if(contact) {
        res.json(contact)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    contacts.splice(id)
    res.status(204).end()
})

app.post('/api/persons', (req,res) => {
    const newContact = req.body
    const foundContact = contacts.find(c => c.name === newContact.name)
    console.log('Found contact: ',foundContact)
    console.log(newContact)
    if(newContact.number === undefined || newContact.name === undefined || foundContact !== undefined) {
        return res.status(400).json({ error: 'Name must be unique'})
    } else {
        newContact.id = contacts.length
        contacts.push(newContact)
        res.json(newContact)
    }

})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})