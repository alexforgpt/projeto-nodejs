
const express = require('express');
const app =express();
  app.get('/Carro',(req,res) => {
    res.send('Seu Carro');

  });
  app.get('/Nome',(req,res) => {
    res.send('teu Nome');
});
app.get('/Tarefas',(req,res) => {
  res.status('404').send('nada');
});
app.get('/pagamentos',(req,res) => {
  res.sendStatus('403');


  });app.get('/Apelido',(req,res) => {
    res.send('Teu Apelido ');

  });
  const PORT =3000;
  app.listen(PORT,()=>{
console.log(`server a correr em http:/localhost:${PORT}`);
});