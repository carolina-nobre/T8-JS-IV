const comidas = ['Lasanha','Batata','Alface']

console.log(comidas [2]);

comidas.forEach((comida, posicao) =>{
    console.log(`na posicao ${posicao} temos a comida : ${comida}`); //mostra o que tem todas as posições e quais posições
 
})

let outrasComidas = comidas.concat("Jiló")
console.log('comidas', comidas);
console.log('outrasComidas', outrasComidas);

let stringDoArray =  comidas.join(', ')
console.log(stringDoArray);

console.log(comidas.shift());
console.log(comidas);

console.log(comidas.pop());
console.log(comidas);

comidas.unshift("Arroz");
console.log(comidas);


comidas.push("Macarrão");
console.log(comidas);

comidas.reverse();
console.log(comidas);

let cortarAlimentos = comidas.slice(1);
console.log(cortarAlimentos);

comidas.splice(1,0, 'Feijão');
console.log(comidas);

comidas.sort();
console.log(comidas);

comidas.push("Alface");
console.log(comidas.indexOf("Batata"));

let mapArray = comidas.map((comida)=> `${comida}Gostosa`);
console.log(mapArray);

let arrayProcura = comidas.filter((comida) => comida === 'Batata');
console.log(arrayProcura);

let juntaComida =  comidas.reduce((esq, dir)=>{
    return `${esq} , ${dir}`
})

console.log(juntaComida);

console.log(numeros.find(i => numero === 1));












