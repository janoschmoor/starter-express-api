const express = require('express');
const app = express();

// Serve static files from the "public" folder
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/r', (req, res) => {
    const files = ["n0", "n1"];
    const file = files[Math.floor(Math.random() * files.length)];
    res.sendFile(__dirname + '/public/r/'+file+'.html');
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
