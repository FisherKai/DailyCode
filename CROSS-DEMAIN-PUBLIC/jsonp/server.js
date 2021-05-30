let express = require('express');
const app = express()
const port = 3000

app.get('/getjson', (req, res) => {
    let { params, jsoncallback } = req.query;
    res.send(`${jsoncallback}('hello world')`);
})
app.listen(port, () => console.log(`Example app listening on port port!`))