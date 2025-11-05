function abrirModal(img) {
  const modal = document.getElementById("modal");
  const imagemModal = document.getElementById("imagemModal");
  const descricao = document.getElementById("descricao");

  imagemModal.src = img.src;
  descricao.innerText = img.alt;

  modal.classList.add("mostrar");
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("mostrar");
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    fecharModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    fecharModal();
  }
});
