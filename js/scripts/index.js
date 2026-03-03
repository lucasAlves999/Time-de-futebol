document.addEventListener("DOMContentLoaded", () => {

    const partidas = 3;
    const resumo = calcularResumoAtletas(atletas, partidas);


    document.getElementById("home-gols").textContent = resumo.totalGols;
    document.getElementById("home-assistencias").textContent = resumo.totalAssistencias;
    document.getElementById("home-mediaGols").textContent = resumo.mediaGols;
    

});