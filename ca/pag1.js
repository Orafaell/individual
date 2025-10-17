const musculos = {
  biceps: {
    titulo: "Bíceps",
    descricao: "O bíceps braquial é um músculo localizado na parte frontal do braço. É responsável pela flexão do cotovelo e rotação do antebraço."
  },
  quadriceps: {
    titulo: "Quadríceps",
    descricao: "O quadríceps é um grupo muscular localizado na parte frontal da coxa. Ele é responsável pela extensão do joelho e é essencial para caminhar, correr e pular."
  }
};

function mostrarInfo(musculo) {
  document.getElementById("titulo-musculo").innerText = musculos[musculo].titulo;
  document.getElementById("descricao-musculo").innerText = musculos[musculo].descricao;
  document.getElementById("info-modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("info-modal").style.display = "none";
}
