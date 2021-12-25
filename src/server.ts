import express from "express";
const app = express();

// GET - BUSCAR POR INFORMAÇÃO 
// POST - INSERIR INFROMAÇÃO
// PUT - ALTERAR INFORMAÇÃO 
// DELETAR - DEMOVER DADOS
// PATCH - ALTERAR IFORMAÇÃO ESPECIFICA 

app.get("/test", (req,res) => {
    return res.send("Texte de rota") 
})

app.post("/test-post", (req,res) => {
    return res.send("texte de post")
})

app.listen(3000, () => console.log("Server is runner port 3000"));