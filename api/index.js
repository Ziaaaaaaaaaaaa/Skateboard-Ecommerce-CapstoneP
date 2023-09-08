const { express, router } = require('./controller')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/ErrorHandling')

app.use(express.static('./static'), express.urlencoded({ extended: false }),cors(), cookieParser(), router)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://skateboard-ecom.onrender.com");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Content-Type, Authorization");
    next();
  });

app.get('^/$|/skate', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})

app.use(errorHandling)

app.listen(port, ()=>{
    console.log(`You are using port http://localhost:${port}`);
})