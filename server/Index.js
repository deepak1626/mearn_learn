const dotenv = require('dotenv')
dotenv.config()


const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')

const fileupload = require('express-fileupload');
app.use(fileupload());
app.use(express.static('assets'))
const path = require('path');
 app.use('/assets', express.static(path.join(__dirname, 'assets')));



const corsOption = { 
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    Credentials:true
}
app.use(cors(corsOption))
require('./utils/db')

const authRouter = require('./router/auth-router')
const contactRoute = require('./router/contact_router')

const serviceRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')



app.use('/api/auth', authRouter)
app.use('/api/form', contactRoute)
app.use('/api/data', serviceRoute)

app.use('/api/admin', adminRoute)
app.use('/api/admin', adminRoute)





/* app.get('/', (req, res) => {
    res.send('this is our first class of express')

})


app.get('/about', (req, res) => {
    res.send('this is about page')

})

app.get('/contact', (req, res) => {
    res.send('this is contact page')

})

app.get('/product', (req, res) => {
    res.send('this is product page 1')

})

app.post('/register', (req, res) =>{
    res.send('we are creating data')
}) */

app.listen(9000, () =>{
    console.log('server is runnig on the port 9000')
})
