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

falarDepoisDe(3, "Hum,esperei para falar").then(frase=> console.log(`${frase} - vim da promise`)).catch(e=>console.log(e))
//aqui o then vai fazer com que tenha a resposta depois dos parametros passados como o 3 e a frase passada da função passada lá em cima
// o catch vai passar  a resposta com as informações no reject
//reject=catch then=resolve