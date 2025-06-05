let express = require('express');
let app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send({status: 200, msg:'Hello World'}
    );
})

app.get('/api', (req, res) => {
    res.send({status: 200, msg:'Hello API'}
    );
})

app.get('/product', (req, res) => {
    res.send ({status: 200, msg:'Hello Product'}
    );
}) 

app.get('/news/:id', (req, res) => {
    let currentId = req.params.id;
    res.send (`News Details API ${currentId}`);
});

app.post('/login', (req, res) => {
      res.send({status: 200, msg:'Hello Login'});
})



app.listen('8000') //http://localhost:8000/