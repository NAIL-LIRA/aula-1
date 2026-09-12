class leitor{
    constructor(nomeLeitor, matricula){
        this.nomeLeitor=nomeLeitor
        this.matricula=matricula
    }
}

const leitor1= new leitor('joao','123456')
const leitor2=new leitor('maria','678910')
const leitor3=new leitor('jose','111213')
// console.log(leitor1);

class item{
    constructor(nomeItem,tipo){
        this.nomeItem=nomeItem
        this.tipo=tipo
    }
}

const item1=new item('receita da vovo','livro')
const item2=new item('revista piaui', 'revista')
const item3=new item('turma da monica', 'gibi')



class emprestimo{
    constructor(leitor, item, retirada, devolucao, situacao){
        this.leitor=leitor
        this.item=item
        this.retirada=retirada
        this.devolucao=devolucao
        this.situacao=situacao
    }

}
const emprestimo1= new emprestimo(leitor1,item2,'2026-05-12','2026-07-01', 'devolvido')

console.log(emprestimo1);
console.log(emprestimo1.leitor);
