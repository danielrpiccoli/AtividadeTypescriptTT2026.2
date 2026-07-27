"use strict";
// Para que esse array receba Tarefas, o que devemos fazer?
const listaDeTarefas = [];
/**
 * Cria um novo objeto Tarefa, adiciona ao array listaDeTarefas e retorna uma mensagem.
 * @param titulo - Texto descritivo da tarefa
 * @param prioridade - Nível de prioridade ("baixa" | "media" | "alta")
 * @param categoria - Categoria OPCIONAL da tarefa
 * @returns Mensagem de sucesso (string)
 */
//Complete com os argumentos devidamente tipados e implemente essa função
//"any" seria o tipagem ideal para o retorno dessa função?
function adicionarTarefa(titulo, prioridade, categoria) {
    const novaTarefa = { titulo, prioridade, categoria };
    listaDeTarefas.push(novaTarefa);
    return `Tarefa "${titulo}" adicionada com sucesso`;
}
/**
 * Filtra as tarefas registradas com base na prioridade informada.
 * @param prioridade - Nível de prioridade a ser filtrado
 * @returns Lista contendo apenas as tarefas que correspondem à prioridade
 */
//Complete com os argumentos devidamente tipados e implemente essa função
//"any" seria o tipagem ideal para o retorno dessa função?
function listarTarefasPorPrioridade(prioridade) {
    return listaDeTarefas.filter(tarefa => tarefa.prioridade === prioridade);
}
//remova os comentarios conforme implemente as funções para testá-las
/*---------------------------------
    TESTE SUAS FUNÇÔES AQUI!
---------------------------------*/
console.log(adicionarTarefa("Ver as aulas do TT", "alta", "Estudo"));
console.log(adicionarTarefa("Fazer compras", "baixa"));
console.log(adicionarTarefa("Praticar exercícios", "alta", "Saúde"));
console.log("Tarefas de alta prioridade:", listarTarefasPorPrioridade("alta"));
