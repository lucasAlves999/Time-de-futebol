document.addEventListener("DOMContentLoaded", () => {

    const resumo = calcularResumoAtletas(atletas);

    document.getElementById("home-gols").textContent = resumo.totalGols;
    document.getElementById("home-assistencias").textContent = resumo.totalAssistencias;

});