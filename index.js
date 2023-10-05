const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(express.json())

let phonebookEntries = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('dist'))

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(phonebookEntries)
})

app.get('/api/info', (req, res) => {
    const phonebookLength = phonebookEntries.length;
    res.send(`Phonebook currently has ${phonebookLength} people <br></br> ${new Date()}`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const ourEntry = phonebookEntries.find(entry => entry.id === id)

    if (ourEntry) {
        res.json(ourEntry)
    } else {
        res.send('Error. Entry not found').status(404)
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    phonebookEntries = phonebookEntries.filter(entry => entry.id !== id)

    res.status(204).end()

})

function generateUniqueID() {
    return Number((Math.random() * 10000000000).toFixed())
}

app.post('/api/persons', (req, res) => {
    const newEntry = req.body
    newEntry.id = generateUniqueID()
    console.log(newEntry)
    if (!newEntry.name || !newEntry.number) {
        res.status(400).send('Error. No name or number set.')
    } else if (phonebookEntries.find(entry => entry.name === newEntry.name || entry.number === newEntry.number)) {
        res.status(400).send('Error. Username or number already taken.')
    }
    updatedData = phonebookEntries.concat(newEntry)
    phonebookEntries = updatedData
    res.json(updatedData)
    console.log(updatedData)
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
