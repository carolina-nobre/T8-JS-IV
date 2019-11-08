const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()

        }).then(json => {
            console.log(json);
            logradouroInput.value = (json.logradouro)
            complementosInput.value = (json.complemento)
            bairroInput.value = (json.bairro)
            localidadeInput.value = (json.localidade)
            ufInput.value = (json.uf)
            ///façam aparecer os valores nos inputs
            preencheInputs(json)
        })
    }
})

