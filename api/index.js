const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandling = require('./middleware/ErrorHandling');
const { router } = require('./controller');

// Apply CORS middleware globally
app.use(cors({
  origin: 'https://skateboard-ecom.onrender.com',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
  exposedHeaders: 'Content-Type, Authorization',
}));

// Other middleware
app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

// Serve HTML for specific routes
app.get(['^/$', '/skate'], (req, res) => {
  res.sendFile(path.resolve(__dirname, './static/html/index.html'));
});

// Error handling middleware
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
