/* Core Modules */
const path = require('path')
/* Installed Modules*/
const express = require('express')
const serveStatic = require('serve-static')
const favicon = require('serve-favicon');

// create the express app
const app = express();

// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/public') ) )
// Serves favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)
