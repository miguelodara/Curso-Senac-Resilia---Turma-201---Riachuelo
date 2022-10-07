/*function carrinho(){
    const addButton = document.getElementById("produto01")
    const produto = document.getElementById("nome_produto").textContent
    const preco = document.getElementById("preco_produto").textContent
    const carrinho = document.getElementById("conteiner_carrinho")
    let total = 0
    document.addEventListener('click', ()=>{
        // carrinho.innerHTML = produto;
        total+=Number(preco)
        // carrinho.innerHTML = total;

    })
    carrinho.innerHTML = total;
}*/

/*function menu() {
    let fundo = document.getElementsByClassName("conteiner_botao_menu")
    fundo.style.background='black'
}*/

function add_car(){
    alert("Adicionado ao Carrinho")
}

function mostrar_item1(){
    document.getElementById("nome_produto").innerHTML = "PLACA DE VIDEO PNY GEFORCE RTX 3070 TI XLR8 GAMING EPIC-X RGB, 8GB, GDDR6X, 256-BIT, VCG3070T8TFXPPB1"
    document.getElementById("descricao_produto").innerHTML = ""
}

function mostrar_item2(){
    document.getElementById("nome_produto").innerHTML = "Produto 02"
    document.getElementById("descricao_produto").innerHTML = "Produto 02"
}

function mostrar_item3(){
    document.getElementById("nome_produto").innerHTML = "Produto 03"
    document.getElementById("descricao_produto").innerHTML = "Produto 03"
}

function mostrar_item4(){
    document.getElementById("nome_produto").innerHTML = "Produto 04"
    document.getElementById("descricao_produto").innerHTML = "Produto 04"
}

function mostrar_item5(){
    document.getElementById("nome_produto").innerHTML = "Produto 05"
    document.getElementById("descricao_produto").innerHTML = "Produto 05"
}

function mostrar_item6(){
    document.getElementById("nome_produto").innerHTML = "Produto 06"
    document.getElementById("descricao_produto").innerHTML = "Produto 06"
}

function mostrar_item7(){
    document.getElementById("nome_produto").innerHTML = "Produto 07"
    document.getElementById("descricao_produto").innerHTML = "Produto 07"
}

function mostrar_item8(){
    document.getElementById("nome_produto").innerHTML = "Produto 08"
    document.getElementById("descricao_produto").innerHTML = "Produto 08"
}


function nao_mostrar(){
    document.getElementById("nome_produto").innerHTML = "ResiTec"
    document.getElementById("descricao_produto").innerHTML = "ResiTec"
}