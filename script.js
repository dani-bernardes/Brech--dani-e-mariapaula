function inicio() {
  let nome = prompt("Olá !! Qual é o seu nome?");
  if (nome) {
    alert("Bem-vindo ao Brechó Garimpaê, " + nome + "! Estamos muito felizes por você estar aqui!");
  }

  let Roupaseacessorios = confirm("Deseja ver nossas Roupas e acessórios?");
  if (Roupaseacessorios) {
    mostrarroupas();
  }
}

function mostrarroupas() {
  const itens = [
    "Roupas femininas", "Sapatos femininos", "Acessórios femininos",
    "Roupas masculinas", "Sapatos masculinos", "Acessórios masculinos","Roupas de marcas","Camisas de time","Livros","Chapéus e bonés","Jaquetas","Câmeras analógicas","Artigos de decoração"
  ];

  const imagens = {
    "Roupas femininas": "imagens/roupafem.JPG",
    "Sapatos femininos": "imagens/sapatofem.JPG",
    "Acessórios femininos": "imagens/acessoriofem.JPG",
    "Roupas masculinas": "imagens/roupamasc.JPG",
    "Sapatos masculinos": "imagens/sapatomasc.JPG",
    "Acessórios masculinos": "imagens/acessoriomasc.JPG",
    "Roupas de marcas":"imagens/marca.JPG",
    "Camisas de time":"imagens/time.JPG",
    "Livros":"imagens/livros.JPG",
    "Chapéus e bonés":"imagens/bone.JPG",
    "Jaquetas":"imagens/jaqueta.JPG",
    "Câmeras analógicas":"imagens/camera.JPG",
    "Artigos de decoração":"imagens/decoracao.JPG",
  
    
  };

  const lista = document.getElementById("nossos-itens");
  const modal = document.getElementById("meuModal");
  const imagem = document.getElementById("imagemModal");
  const fechar = document.getElementById("fechar");

  lista.innerHTML = "";

  for (let i = 0; i < itens.length; i++) {
    const li = document.createElement("li");
    li.textContent = itens[i];
    li.onclick = function () {
      if (imagens[itens[i]]) {
        imagem.src = imagens[itens[i]];
        modal.style.display = "block";
      } else {
        alert("Imagem não disponível para: " + itens[i]);
      }
    };
    lista.appendChild(li);
  }

  fechar.onclick = function () {
    modal.style.display = "none";
  };
}
