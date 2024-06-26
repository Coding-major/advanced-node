const cluster = require('cluster')

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {

    const express = require('express')
    const app = express()
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) { }
    }
    
    app.get('/',  (req, res) => {
        doWork(5000)
        res.send('hi there')
    })

    app.get('/fast', (req, res) => {
        res.send('this was fast')
    })
    
    app.listen(3000)
}

