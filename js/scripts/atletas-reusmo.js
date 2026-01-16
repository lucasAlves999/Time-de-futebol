function calcularResumoAtletas(listaAtletas) {

    const totalAtletas = listaAtletas.length;

    const totalGols = listaAtletas.reduce((soma, atleta) => {
        return soma + atleta.gols;
    }, 0);

    const totalAssistencias = listaAtletas.reduce((soma, atleta) => {
        return soma + atleta.assistencias;
    }, 0);

    return {
        totalAtletas,
        totalGols,
        totalAssistencias
    };
}
