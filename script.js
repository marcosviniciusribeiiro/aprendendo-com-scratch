let indiceAtual = 0;
const imagens = Array.from(document.querySelectorAll(".galeria img"));
imagens.forEach((img, i) => img.addEventListener("click", () => abrirModal(i)));

function abrirModal(indice) {
  indiceAtual = indice;
  const modal = document.getElementById("modal");
  const imagemModal = document.getElementById("imagemModal");
  const descricao = document.getElementById("descricao");

  modal.classList.add("mostrar");

  imagemModal.classList.remove("visivel");

  imagemModal.src = imagens[indiceAtual].src;
  descricao.innerText = imagens[indiceAtual].alt;

  setTimeout(() => {
    imagemModal.classList.add("visivel");
  }, 100);
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("mostrar");
}

function navegar(direcao) {
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  } else if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }

  const imagemModal = document.getElementById("imagemModal");
  const descricao = document.getElementById("descricao");

  imagemModal.classList.remove("visivel");

  setTimeout(() => {
    imagemModal.src = imagens[indiceAtual].src;
    descricao.innerText = imagens[indiceAtual].alt;
    imagemModal.classList.add("visivel");
  }, 100);
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
  if (e.key === "ArrowRight") navegar(1);
  if (e.key === "ArrowLeft") navegar(-1);
});
