class Botao{ //primeiro temos que colocar todos os atributos 
    constructor(texto,cor,tamanho,icone){
        this.texto = texto
        this.cor = cor
        this.tamanho = tamanho
        this.icone = icone
    }
    desenhaBotao(){ //nome da função
        const novoBotao = document.createElement('button') //criando um botao novo
        novoBotao.setAttribute("class",`${this.cor} ${this.tamanho}`)// vai pegar os atributos de cor e tamanho
        if(this.icone){ //add os atributos passado na class anterios
            const tagIcone = document.createElement("i") //criando um elemento que vai ser um icone
            tagIcone.setAttribute("class", `fas ${this.icone}`)// add o atributo desse icone
            novoBotao.appendChild(tagIcone) //add o botao junto com icone
            const text = document.createTextNode(this.texto)//trasnforma o elemento em texto
            novoBotao.appendChild(text)//add o texto dentro do botão


        }else{
            novoBotao.innerHTML = this.texto //rederencia o texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao) // aqui esta add o novo botao no html para aparecer na tela
    }

}

const botaoVerde = new Botao('Botao verde',"verde", "pequeno", "fa-plus") // aqui esta add ao atributos com as class que já tem no css
botaoVerde.desenhaBotao()

const botaoRoxo = new Botao ("Botao roxo", "roxo", "medio", "fa-cat")
botaoRoxo.desenhaBotao()
