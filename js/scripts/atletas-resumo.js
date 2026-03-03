function calcularResumoAtletas(listaAtletas, partidas) {

    const totalAtletas = listaAtletas.length;

    const totalGols = listaAtletas.reduce((soma, atleta) => {
        return soma + atleta.gols;
    }, 0);

    const totalAssistencias = listaAtletas.reduce((soma, atleta) => {
        return soma + atleta.assistencias;
    }, 0);

    const mediaGols = (totalGols / partidas).toFixed(1);
        
  
    return {
        totalAtletas,
        totalGols,
        totalAssistencias,
        mediaGols
        
    };
}



