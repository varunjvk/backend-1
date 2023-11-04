import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Express Hello')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})


app.listen(port,()=>{console.log('Listening at port: 3000')})