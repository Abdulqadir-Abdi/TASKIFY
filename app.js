const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const HOSTNAME = 'localhost';
const PORT = 9000;


// Create and configure server
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')) {
        taskRoutesutes(req, res)
    } else {
        // Handle other endpoints (404 Not Found)
        res.writeHead(404, 'Not Found', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            message: 'You Get Lost!' }));
    }
});

// Start server and listen on PORT and HOSTNAME
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on port:${PORT}`);
});
