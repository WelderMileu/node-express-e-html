const express = require('express')
const app = express()

app.get("/",(req, res) => {
	res.sendfile("./src/home.html",{ root:__dirname})
})

app.listen(3000,(err) => {
	if (err) {
		console.log('Nao foi possivel iniciar o servidor!')
	}else{
		console.log('Servidor rodando em http://localhost:3000')
	}
})