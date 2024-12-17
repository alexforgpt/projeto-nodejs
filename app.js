const express = require('express')
const app = express()
const port = 3000
const path = require('path');
let moneyBalance = null;
let numId = null;
app.use(express.json());
 
 
app.get('/', (req, res) => {
  res.send('Página inicial')
})
app.get('/sobre', (req, res) => {
    res.sendfile('Sobre mim')
  })
 
  app.get('/contacto', (req, res) => {
    res.sendfile('Contactos:')
  })
 
  app.get('/tarefas', (req, res) => {
    res.sendStatus(404)
  })

  app.get('/pagamentos', (req, res) => {
    res.status(403).send('Não econtrada')
  })
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
app.get('/livro', (req, res) =>{
  const livro= req.body;
  res.send(`O nome do livro é ${livro.nome} do artista ${livro.artista} no ano ${livro.ano}`)
  })

  app.get('/balance', (request, response) =>{
 
    response.send(`${moneyBalance}`)
  })
  app.post('/balance', (request, response) =>{
    if (moneyBalance == null){
    moneyBalance = request.body.money;
    response.sendStatus(200);
  }
    else
    response.sendStatus(400);  
  })   
 app.put('/balance', (request, response) => {
    if (moneyBalance == null) {
        response.sendStatus(400);
    }
    if (moneyBalance != null) {
        moneyBalance = request.body.money; 
        response.sendStatus(200); 
    }
});
  app.delete('/balance', (request, response) => {
   
    moneyBalance = null;
    
    response.send(`${moneyBalance}`);
});
app.get('/', (req, res) => {
  res.send('Página inicial')
})
app.get('/sobre', (req, res) => {
    res.sendfile('Sobre mim')
  })
 
  app.get('/contacto', (req, res) => {
    res.sendfile('Contactos:')
  })
 
  app.get('/tarefas', (req, res) => {
    res.sendStatus(404)
  })
 
  app.get('/pagamentos', (req, res) => {
    res.status(403).send('Não econtrada')
  })

  app.get('/users', (req, res) => {
    res.send(users);
  })

  app.post('/users', (req, res) => {
    res.send(users);
    
  })
  
  app.put('/users', (req, res) => {
    res.send(users);
    
  })

  app.delete('/users', (req, res) => {
    res.send(users);
    
  })
  const users = [
      {
         id : 0,
         first_name : 'John',
         last_name : 'Doe',
         email : 'johndoe@example.com'
       },
      
       {
       id : 1,
       first_name : 'Alice',
       last_name : 'Smith',
       email : 'alicesmith@example.com'
     }
     ]