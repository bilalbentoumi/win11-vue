const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000

app.use('/', express.static(path.join(path.dirname(require.main.filename), 'www')))

app.get('/*', (req, res) => {
    try {
        res.sendFile(path.join(path.dirname(require.main.filename), 'www', 'index.html'))
    } catch (err) {
        res.json({ success: false, message: 'Something went wrong' })
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})