const app = require('./app.js');

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
  });
