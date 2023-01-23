const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner', 'Maria'];

alunos.push({
    nome: 'Gustavo',
    nota: 10
})

alunos.push({
    nome: 'Julia',
    nota: 4
})

alunos.push({
    nome: 'Paula',
    nota: 6
})

alunos.push({
    nome: 'Wagner',
    nota: 9
})

alunos.push({
    nome: 'Maria',
    nota: 2
})

const alunosComNotaMaiorQueSeis = alunos.filter(function(item) {
    return item.nota >= 6
})

console.log(alunosComNotaMaiorQueSeis);