
    let frutas = ["banana", "morango", "bacurí", "laranja"];
    
    let btn = document.getElementById("btn");
    let input = document.getElementById('input')
    console.log(btn);

    btn.addEventListener('click', function () {
    let achou = frutas.indexOf(input.value)
    if(achou !== -1){
        console.log("achou");
        
    }
    else{
        console.log("não achou");
        
    }
})
    

    
    

    
