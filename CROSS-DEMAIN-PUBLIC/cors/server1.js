const { static } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(static(__dirname));
app.listen(port, () => console.log(`Example app listening on port port!`))