console.log("Sprint 2 iniciado");

const container = document.getElementById("atletas-container");

function renderizarAtletas(listaAtletas) {
    container.innerHTML = "";

    listaAtletas.forEach(atleta => {
        const card = document.createElement("div");
        card.classList.add("card-atleta");

        const overall = calcularOverall(atleta.habilidades);
        const classeOverall = getClasseOverall(overall);

        card.innerHTML = `
            <div class="card-overall ${classeOverall}">${overall}</div>

            <h2 class="card-nome">${atleta.nome}</h2>
            <p class="card-posicao">${atleta.posicao}</p>

            <div class="card-stats">
                <span>⚽ ${atleta.gols}</span>
                <span>🎯 ${atleta.assistencias}</span>
            </div>
        `;

        container.appendChild(card);
    });

    
    atualizarResumo(listaAtletas);
}

renderizarAtletas(atletas);


function atualizarResumo(listaAtletas) {
    const resumo = calcularResumoAtletas(listaAtletas);

    document.getElementById("total-atletas").textContent = resumo.totalAtletas;
    document.getElementById("total-gols").textContent = resumo.totalGols;
    document.getElementById("total-assistencias").textContent = resumo.totalAssistencias;
}

function calcularOverall(habilidades) {
    const { velocidade, chute, passe } = habilidades;
    const soma = velocidade + chute + passe;
    const media = soma / 3;
    return Math.round(media);
}

function getClasseOverall(overall) {
    if (overall >= 85) return "overall-alto";
    if (overall >= 70) return "overall-medio";
    return "overall-baixo";
}

const filtros = document.querySelectorAll(".atletas-filtros li");

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {

        filtros.forEach(f => f.classList.remove("ativo"));
        filtro.classList.add("ativo");

        const posicao = filtro.dataset.posicao;

        if (posicao === "Todos") {
            renderizarAtletas(atletas);
        } else {
            const atletasFiltrados = atletas.filter(atleta =>
                atleta.posicao === posicao
            );

            renderizarAtletas(atletasFiltrados);
        }
    });
});
