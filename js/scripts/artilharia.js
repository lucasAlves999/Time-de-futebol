console.log("Sprint 3 iniciado");

const container = document.getElementById("artilharia-container");


const ranking = [...atletas].sort((a, b) => b.gols - a.gols);

ranking.forEach((atleta, index) => {
    const linha = document.createElement("div");
    linha.classList.add("artilharia-linha");

    if (index === 0) linha.classList.add("ouro");
    if (index === 1) linha.classList.add("prata");
    if (index === 2) linha.classList.add("bronze");

    linha.innerHTML = `
        <span class="posicao">${index + 1}º</span>
        <span class="nome">${atleta.nome}</span>
        <span class="gols">${atleta.gols} gols</span>
    `;

    container.appendChild(linha);
});

const top3 = ranking.slice(0, 3);
const posicoes = ["🥇", "🥈", "🥉"];

top3.forEach((atleta, index) => {
    const card = document.getElementById(`top-${index + 1}`);

    card.classList.add(index === 0 ? "ouro" : index === 1 ? "prata" : "bronze");

    card.innerHTML = `
    <div class="top-faixa top-${index}"></div>

    <div class="top-posicao">${posicoes[index]}</div>

    <div class="top-foto">
        <img 
            src="${atleta.foto || './assets/imagens/atletas/avatar-default.png'}"
            alt="${atleta.nome}"
        />
    </div>

    <div class="top-nome">${atleta.nome}</div>
    <div class="top-posicao-jogo">${atleta.posicao}</div>

    <div class="top-gols-box">
        <span class="top-gols-num">${atleta.gols}</span>
        <span class="top-gols-label">GOLS</span>
    </div>
`;
});

function atualizarResumoTemporada(listaAtletas) {
    const totalAtletas = listaAtletas.length;

    const totalGols = listaAtletas.reduce((total, atleta) => {
        return total + atleta.gols;
    }, 0);

    const totalAssistencias = listaAtletas.reduce((total, atleta) => {
        return total + atleta.assistencias;
    }, 0);

    document.getElementById("total-atletas").textContent = totalAtletas;
    document.getElementById("total-gols").textContent = totalGols;
    document.getElementById("total-assistencias").textContent = totalAssistencias;
}

atualizarResumoTemporada(atletas);





const totalGols = atletas.reduce((soma, a) => soma + a.gols, 0);
const artilheiro = ranking[0];


