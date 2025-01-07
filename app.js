const express = require('express')
const mysql = require ('mysql2')
const app = express()
const port = 3000
const NOEM_DA_TABELA ="users"
const path = require('path');
let moneyBalance = null;
app.use(express.json());
 

 const connection =mysql.createConnection ({
  host: '127.0.0.1',
  user :'root',
  password :'',
  database:'psi_t1',
  port  :3306
 });


 connection.connect((err)=> {

  if (err) {
    console.error('Erro ao conectar a base  de dados', err.message );
  } else {
    console.log('Conectado a base de dados  MYSQL1:');
     }
  });
 
const NOME_TABELA="users"


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

  let numId = 2;

app.get('/users', (req, res) => {
  
    const myQuery   = `SELECT * FROM ${NOME_TABELA}`

    connection.query(myQuery, (err, results) => {
      if (err){
      return res.status(500).send('Erro ao buscar users:' + err.mensage );
        }
      res.json(results);
    });
  })


    app.post('/users', (request, response) =>{
      const first_name = request.body.first_name
      const last_name = request.body.last_name
      const email = request.body.email
      
       const myQuery   = `INSERT INTO users (id, first_name, last_name, email) VALUES (NULL,'${first_name}','${last_name}','${email}');`
      
     connection.query(myQuery, (err,results) => {
      
      
       if (err) {
         return response.status(500).send('Erro ao buscar users: ' + err.message);
       }
      
       response.json(results);
     });
     })
      


 
  
  
  app.put('/users/:id', (request, response) => {
    const id = request.params.id
    const first_name = request.body.first_name
    const last_name = request.body.last_name
    const email = request.body.email
    
     const myQuery   = `UPDATE users SET first_name = '${first_name}' ,last_name= '${last_name}', email='${email}' Where id = '${id}';`
    
   connection.query(myQuery, (err,results) => {
    
    
     if (err) {
       return response.status(500).send('Erro ao buscar users: ' + err.message);
     }
    
     response.json(results);
   });
   })


  app.delete('/users', (req, res) => {
    res.send(users);

    for(let i = 0;i<users.length;i++){

    if (users[i].id== req.body.id){
        users.splice( i,1);
        res.sendStatus(200);
    }
  }
    
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