
const express = require('express');
const path=require('path')
const app =express();
  app.get('/Carro',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));


  });
  app.get('/nome',(req,res) => {
    res.sendFile(path.join(__dirname,'nome.html'));
    
});
app.get('/Tarefas',(req,res) => {
  res.status('404').send('nada');
});
app.get('/pagamentos',(req,res) => {
  res.sendFile(path.join(__dirname,'pagamentos.html'));

  });app.get('/Apelido',(req,res) => {
    res.send('Teu Apelido ');

  });
  const PORT =3000;
  app.listen(PORT,()=>{
console.log(`server a correr em http:/localhost:${PORT}`);
});