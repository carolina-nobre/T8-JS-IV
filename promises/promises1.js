function falarDepoisDe(segundos,frase) {
    return new Promise ((resolve,reject)=>{
        if(segundos>10) {
          reject ("muito tempo para falar")  
        }
        setTimeout(()=>{
            resolve(frase)
        
        }, segundos * 1000)
    })
}

function irPraCasaDosAmigos() {
    cheguei = true;
    return cheguei
}
function comprarEmOutroLugar(){
    console.log("To sem comida, não dá pra ir sem nada")
}

assarPizza(10).then(resposta => irPraCasaDosAmigos()).then( respostaDosAmigos => console.log(`${respostaDosAmigos ? "Vamos chamar o uber" : "Calmae, já to chegnado"}`)).catch(erro => comprarEmOutroLugar())
let condicao = false
console.log(`${ condicao ? 'Verdade' : 'Mentira'}`)

