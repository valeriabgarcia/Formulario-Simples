// Importar os dados 
const cursos = require('./database.js');

// Pegar o input do usuário
const readline = require('readline-sync');

//Menu
const nome = readline.question("Digite seu nome:");
console.log(`Ola ${nome}, seja bem-vindo(a) a plataforma de cursos sobre Educacao Financeira.`);

do {
    var permanece;
    const menu = parseInt(readline.question(`Selecione o que voce deseja fazer: \n [1] Criar um curso \n [2] Exibir um curso \n [3] Atualizar um curso \n [4] Deletar um curso \n [5] Listar os cursos\n [6] Sair \n Numero do menu que deseja:`));

    if (menu == 1){
        criarCurso();
        permanece = readline.question(`Deseja voltar ao menu inicial? S/N`);
    } else if (menu == 2){
        exibirCurso();
        permanece = readline.question(`Deseja voltar ao menu inicial? S/N`);
    } else if (menu == 3){
        atualizarCurso();
        permanece = readline.question(`Deseja voltar ao menu inicial? S/N`);
    }else if (menu == 4){
        deletarCurso();
        permanece = readline.question(`Deseja voltar ao menu inicial? S/N`);
    }else if (menu == 5){
        listaCursos();
        permanece = readline.question(`Deseja voltar ao menu inicial? S/N`);
    }else if (menu == 6){
        permanece == 'N';
    }
    else{
        console.log(`${nome} o valor que voce digitou nao corresponde ao menu, digite um numero valido!`);
        permanece == 'S';
    }
} while (permanece == 'S')

if (permanece == 'N'){
    console.log(`Agradecemos pela sua visita, volte sempre ${nome}`);
}


// criarCurso: recebe todos os dados por parâmetro e adiciona na lista de cursos como objeto.
function criarCurso(){
    const id = parseInt(readline.question("Digite o id do curso:"));
    const titulo = readline.question("Digite o titulo do curso:");
    const descricao = readline.question("Digite o descricao do curso:");
    const imagem = readline.question("Digite a url da imagem do curso:");
    const nome_professor = readline.question("Digite o nome do professor do curso:");
    const lista_aulas = readline.question("Digite o link para as aulas do curso:");
    cursos.push({id, titulo, descricao, imagem, nome_professor, lista_aulas});
}

// exibirCurso: recebe o id de um curso por parâmetro e imprime todos os dados do curso selecionado.
function exibirCurso(){
    const entradaId = parseInt(readline.question("Digite o id do curso voce deseja:"));

    //Retornando de acordo com o id do curso escolhido:
    const retorno = cursos.filter(curso => curso.id === entradaId);
    console.table(retorno);
}

// atualizarCurso: recebe todos os dados por parâmetro e atualiza na lista de cursos.
function atualizarCurso(){
    // recebe o id por parâmetro e remove o curso selecionado da lista
    const entradaTitulo = readline.question("Digite o titulo do curso voce deseja atualizar:");
        
    // Pegar o index do id recebido 
    const indexTitulo = parseInt (cursos.findIndex(curso => curso.titulo === entradaTitulo));

    // Atualiza todos os dados de acordo com o index do titulo selecionado
    const id = parseInt(readline.question("Digite o id do curso:"));
    const titulo = readline.question("Digite o titulo do curso:");
    const descricao = readline.question("Digite o descricao do curso:");
    const imagem = readline.question("Digite a url da imagem do curso:");
    const nome_professor = readline.question("Digite o nome do professor do curso:");
    const lista_aulas = readline.question("Digite o link para as aulas do curso:");
    cursos[indexTitulo] = {id, titulo, descricao, imagem, nome_professor, lista_aulas};
}

// deletarCurso: recebe o id por parâmetro e remove o curso selecionado da lista.
function deletarCurso (){
    // recebe o id por parâmetro e remove o curso selecionado da lista
    const entradaId = parseInt(readline.question("Digite o id do curso voce deseja deletar:"));
    
    // Pegar o index do id recebido 
    const indexId = parseInt (cursos.findIndex(curso => curso.id === entradaId));
    
    // Deletar todos os dados de acordo com o index do id selecionado
    cursos.splice(indexId, 1);
}

// listaCursos: imprime todos os cursos.
function listaCursos (){
    console.log('Esses são todos os cursos disponíveis:');
    console.table(cursos);
}

/*criarCurso();
listaCursos();
atualizarCurso();
exibirCurso();
deletarCurso();
listaCursos();*/