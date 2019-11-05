let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

class NavBar{
    render(){
        const navbar = ` <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search"> Search </button>
        </div>` //aqui esta sendo adicionando as coisas que teria no html

        document.getElementById("navbar").insertAdjacentHTML("beforeend", navbar)// aqui esta pegando o elemento pelo id do html e depois esta inserindo as informações passada acima e poderia usar o innerhtml
        
    }
}
 
const novaNavBar = new NavBar()//aqui está dizendo que essa nova const vai ter tudo da class modelo que tem todas as informações
novaNavBar.render()// esta chamando o modelo da NavBar e renderizar tudo que são as informções passada lá em cima no render

class Card {
    constructor (receita){ //esta recendo o obejto e os valores dele
        this.receita = receita
    }
    render(){//aqui  esta sendo colocado todas as informações que tera no html e não precisa colocar todo o caminho
        const aparecerCards = `<div class = "card">
        <img class= "imagem" src="${this.receita.imagem}"/> 
        <h2>${this.receita.titulo}</h2>
        <p class= "ingredientes">${this.receita.ingredientes}</p>  
        </div> 
    `
        document.querySelector(".cards").insertAdjacentHTML('beforeend',aparecerCards)
    }
}

resultados.map(receita => { //aqui está chamando apara aparecer tudo na tela e o map retorna uma array nova
    new Card (receita).render()
   
})

document.querySelector(".button__search").addEventListener('click',//aqui esta pegando o botao e add um evento de click
function () {
    let inputValue =  document.querySelector('.input__search').value.toUpperCase()//aqui esta pegando o valor que tem no input
    let achados= resultados.filter(receita =>{//aqui esta pegando o resultado e filtrando ele
        return receita.titulo.toUpperCase().includes(inputValue) || //aqui está retornando o que pegou do filtro pelo titulo e trazendo o valor
        receita.ingredientes.toUpperCase().includes(inputValue) //aqui está retornando o que pegou do filtro pelos ingredientes e trazendo o valor
    })
    
    document.querySelector(".cards").innerHTML = ""//aqui está deixando os cards vazios para em baixo add os cards dos resultados do filtro
    achados.map(encontrado => { //aqui está chamando apara aparecer tudo na tela e o map retorna uma array nova
        new Card (encontrado).render()
    })

})
