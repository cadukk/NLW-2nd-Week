//Dados
const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "8998645646",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Daniele Evangelista",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "8998645646",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  },
  {
    name: "Cadu Ribeiro",
    avatar: "https://avatars1.githubusercontent.com/u/57085486?s=460&u=01a5b15f3fa869992c30329e3f9b1aca18f8e2b9&v=4",
    whatsapp: "8998645646",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  }

]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects(position)
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query


  //se tiver dados ()data)
  const isNotEmpty = Object.keys(data).length != 0 //const isEmpty = Object.keys(data).length == 0 
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)

    //adicionar dados (data) a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  //se nao, mostrar a pagina
  return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

//Inicio e configuracao do servidor
server
  //configurar arquivos estaticos (css, scripts, imagens)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  //start do servidor
  .listen(5500)