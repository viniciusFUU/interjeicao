//Adicionando o evento de click, chamando o id "calculate" que está vinculado ao button.
document.getElementById("calculate").addEventListener("click", () => {
  //Definindo as variáveis dos dados obtidos pelos inputs.
  const setAInput = document.getElementById("setA").value;
  const setBInput = document.getElementById("setB").value;

  //Dividindo os dados obtidos por vírgulas, utilizando o método "split";
  //Em seguida utilizar o método "map" para avaliar cada item e transformá-los em um número inteiro utilizando a função "parseInt";
  //Método "trim"serve para tirar espaços em branco
  const conjuntoA = setAInput.split(",").map((item) => parseInt(item.trim()));
  const conjuntoB = setBInput.split(",").map((item) => parseInt(item.trim()));

  //Método "filter" cria um array com os elementos que são similares entre os outros dois arrais (conjunto A, conjunto B).
  const intersecao = conjuntoA.filter((element) => conjuntoB.includes(element));

  //Selecionando a <div> com o "id=result", O método "join" serve para formatar o array "intersecao" com vírgulas;
  //Inseri um "if/else" para se caso acontecer de o usuário não inserir nenhum
  if (setAInput || setBInput !== "") {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `A interseção entre os conjuntos é: ${intersecao.join(
      ", "
    )}`;
  } else if (setAInput || setBInput == "") {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `É necessário inserir um conjunto nos dois campos.`;
  } else {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `É necessário inserir um conjunto nos dois campos.`;
  }
});
