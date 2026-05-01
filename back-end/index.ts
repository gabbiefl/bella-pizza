// const express = require('express');

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    console.log("Requisição recebida");
    res.json("Olá, mundo!");
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
