const express = require('express');
const apiRoutes = require('./Develop/Routes/APIRoute')
const htmlRoutes = require('./Develop/Routes/HTMLRoute')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => console.log(`App listening on PORT: http://localhost:${PORT}`));