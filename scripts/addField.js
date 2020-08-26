//procurar o botao
document.querySelector("#add-time")
  //quando clicar no botao
  .addEventListener("click", cloneField);

//executar uma acao
function cloneField() {
  //duplicar os campos. Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);//boolean: true ou false

  //pegar os campos: que campos?
  const fields = newFieldContainer.querySelectorAll('input');

  // para cada campo, limpar
  fields.forEach(function (field) {
    //pegar o field do momento e limpe o
    field.value = "";
  })

  //colocar na pagina: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}