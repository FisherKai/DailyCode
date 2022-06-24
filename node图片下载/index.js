const cheerio = require('cheerio');
const request = require('request')

var http = (uri) => {
    return new Promise((resolve, reject) => {
        request({
            uri: uri,
            method: 'GET'
        }, (err, response, body) => {
            if (err) {
                console.log(err)
            }
            resolve(body)
        })
    })
}

// const url = `https://e-hentai.org/g/2162341/c3e853ee32/`;
const url = `https://e-hentai.org/s/fc8359b383/2162341-1`

http(url).then(res => {
    const $ = cheerio.load(res);
    console.log($(`img`));
})