// const express = require('express');
// const db = require('./config/db');
// db();
// const app = express();
// const path = require('path')

// app.use('/api/files',require('./routes/files'))
// app.use('/files',require('./routes/show'))

// app.set('views',path.join(__dirname,'/views'))
// app.use('/files/download',require('./routes/download'))
// app.set('view engine','ejs')
// app.use(express.static('public'))
// app.use(express.json());
// const PORT= process.env.PORT||3000;


// app.listen(PORT,()=>{
//     console.log(`linteing port ${PORT}`)
// })

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors')
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();
const corsoption={
    origin:process.env.ALLOWED_CLIENTS.split(',')


}
app.use(cors(corsoption))
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));