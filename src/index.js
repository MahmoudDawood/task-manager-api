const app = require('./app')

const port = process.env.PORT // PORT is env var provided by heroku

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
