import express from "express";
const app = express();

app.get("/test", (req,res) => {
    return res.send("Texte de rota") 
})

app.post("/test-post", (req,res) => {
    return res.send("texte de post")
})

app.listen(3000, () => console.log("Server is runner port 3000"));