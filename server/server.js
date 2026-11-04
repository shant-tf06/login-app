import express from 'express';

//Fix __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { authController as methond } from '../controller/auth.controller.js';

//Server
const app = express();
app.set("port",3000);
app.listen(app.get("port"),()=>{
    console.log("Server on port",app.get("port"));
});

//Configuration
app.use(express.static(path.join(__dirname, 'src')));

//routes
// GET method route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'register.html'));
});
app.get('/location', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'location.html'));
});

//endpoints
app.get('/api/register', methond.registerUser);
app.get('/api/login', methond.loginUser);

// POST method route
app.post('/api/register', (req, res) => {
  res.send('POST request to the register API endpoint');
});