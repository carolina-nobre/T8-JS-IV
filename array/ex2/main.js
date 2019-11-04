const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

let form = document.getElementById("form-do-role");
console.log(btn);
const validacao = (nome) =>{
 if (nome.trim() === '') throw 'o campo está vazio'
    
 } 

 const checaPresenca = nome => {
let estaNaLista = nomesNoRole.find((presente) => {
    return nome.toLowerCase() === presente.toLowerCase()
    document.getElementById("status").innerHTML = `${nome} estava no role`
    document.getElementById("status").classList.add('is-valid')
})

if (estaNaLista) {
    console.log('ta na lista');
    
}

throw  `${nome} nããão esta na lista`
 }

form.addEventListener('submit', function (event) {
    let input = document.getElementById('nome').value;
    event.preventDefault()
        
        try {
         validacao(input)  
         checaPresenca(input) 
        } catch (error) {
            document.getElementById("status").innerHTML = erro
            document.getElementById("status").classList.add(erro)
        }
    
    
     
    })
