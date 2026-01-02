console.log("Sprint 2 iniciado");

const container = document.getElementById("atletas-container");

atletas.forEach(atleta => {
    const card = document.createElement("div");
    card.classList.add("card-atleta");

    card.innerHTML = `
    <div class="card-overall">${atleta.overall}</div>

    <h2 class="card-nome">${atleta.nome}</h2>
    <p class="card-posicao">${atleta.posicao}</p>

    <div class="card-stats">
        <span>⚽ ${atleta.gols}</span>
        <span>🎯 ${atleta.assistencias}</span>
    </div>
`;

    container.appendChild(card);
});
