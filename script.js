function abrirModal(img) {
  const modal = document.getElementById("modal");
  const imagemModal = document.getElementById("imagemModal");
  const descricao = document.getElementById("descricao");
  modal.style.display = "block";
  imagemModal.src = img.src;
  descricao.innerText = img.alt;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
