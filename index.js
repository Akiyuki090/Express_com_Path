const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const basepath = path.join(__dirname, "templates");
//ler dados do body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.post("/users/save", (req, res) => {
    console.log(req.body);
    const name = req.body.nome;
    const age = req.body.idade;

    console.log(name);
    console.log(age);
});

app.listen(port, () => {
  console.log(`Esta rodando na porta: ${port}`);
});
