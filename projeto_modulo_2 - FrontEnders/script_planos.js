function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;
    
        modal.style.display = 'block';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;
    
        modal.style.display = 'none';

}

/*document.getElementById("buttom_planos").addEventListener("mouseover", mouseOver2);
  document.getElementById("buttom_planos").addEventListener("mouseout", mouseOut2);
  
  function mouseOver2() {
      document.getElementById("menu_planos").style.display = "block";
    }
  
    function mouseOut2() {
      document.getElementById("menu_planos").style.display = "none";
    }

document.getElementById("buttom_sac").addEventListener("mouseover", mouseOver);
document.getElementById("buttom_sac").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("menu_sac").style.display = "block";
  }

  function mouseOut() {
    document.getElementById("menu_sac").style.display = "none";
  }*/

  /*function detalhe() {
    document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 10px green";
  }

  function detalhe2() {
    document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 10px green";
  }*/

  function detalhe1(){
    document.getElementById("buttom_value").style.display = "flex"
      document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>PHP</h1><p id='descri_text'>O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 200,00 a vista.</p></div></div>"
    document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 5px green"
    document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_03").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_04").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_05").style.boxShadow = "0.5px 0.5px 5px black"

  }

  function detalhe2(){
    document.getElementById("buttom_value").style.display = "flex"
    document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>JAVA</h1><p id='descri_text'>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 350,00 a vista.</p></div></div>"
    document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 5px green"
    document.getElementById("card_03").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_04").style.boxShadow = "0.5px 0.5px 5px black"
    document.getElementById("card_05").style.boxShadow = "0.5px 0.5px 5px black"

}

function detalhe3(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>PYTHON</h1><p id='descri_text'>Python é uma linguagem de programação de alto nível,[5] interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.[1] Atualmente, possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 400,00 a vista.</p></div></div>"
  document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_03").style.boxShadow = "0.5px 0.5px 5px green"
  document.getElementById("card_04").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_05").style.boxShadow = "0.5px 0.5px 5px black"

}

function detalhe4(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>JavaScript</h1><p id='descri_text'>JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 550,00 a vista.</p></div></div>"
  document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_03").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_04").style.boxShadow = "0.5px 0.5px 5px green"
  document.getElementById("card_05").style.boxShadow = "0.5px 0.5px 5px black"

}

function detalhe5(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>C#</h1><p id='descri_text'>C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 350,00 a vista.</p></div></div>"
  document.getElementById("card_01").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_02").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_03").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_04").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_05").style.boxShadow = "0.5px 0.5px 5px green"

}

function detalhe6(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>MySQL</h1><p id='descri_text'>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 350,00 a vista.</p></div></div>"
  document.getElementById("card_06").style.boxShadow = "0.5px 0.5px 5px green"
  document.getElementById("card_07").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_08").style.boxShadow = "0.5px 0.5px 5px black"

}

function detalhe7(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>Oracle DB</h1><p id='descri_text'>O Oracle é um SGBD que surgiu no fim dos anos 70, quando Larry Ellison vislumbrou uma oportunidade que outras companhias não haviam percebido, quando encontrou uma descrição de um protótipo funcional de um banco de dados relacional e descobriu que nenhuma empresa tinha se empenhado em comercializar essa tecnologia.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 350,00 a vista.</p></div></div>"
  document.getElementById("card_06").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_07").style.boxShadow = "0.5px 0.5px 5px green"
  document.getElementById("card_08").style.boxShadow = "0.5px 0.5px 5px black"

}
 
function detalhe8(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>PostgreSQL</h1><p id='descri_text'>O PostgreSQL é um poderoso sistema de banco de dados objeto-relacional de código aberto com mais de 35 anos de desenvolvimento ativo que lhe rendeu uma forte reputação de confiabilidade, robustez de recursos e desempenho.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 350,00 a vista.</p></div></div>"
  document.getElementById("card_06").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_07").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_08").style.boxShadow = "0.5px 0.5px 5px green"

}

function detalhe9(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>React Native</h1><p id='descri_text'>React Native é uma biblioteca Javascript criada pelo Facebook.[2] É usada para desenvolver aplicativos para os sistemas Android [3] e iOS de forma nativa.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 50,00 a vista.</p></div></div>"
  document.getElementById("card_09").style.boxShadow = "0.5px 0.5px 5px green"
  document.getElementById("card_10").style.boxShadow = "0.5px 0.5px 5px black"

}

function detalhe10(){
  document.getElementById("buttom_value").style.display = "flex"
  document.getElementById("01").innerHTML = "<div class='plano_01'><div class='descri'><h1>Swift</h1><p id='descri_text'>Swift é uma linguagem de programação consistente e intuitiva, desenvolvida pela Apple para a criação de apps para iOS, Mac, Apple TV e Apple Watch. Ela foi criada para dar ainda mais liberdade para os desenvolvedores. Swift é fácil de usar e em código aberto, para que qualquer pessoa com uma boa ideia consiga fazer coisas surpreendentes.</p></div><div class='descri2'><img src='img/coin.png'><p id='preco_01'>R$ 150,00 a vista.</p></div></div>"
  document.getElementById("card_09").style.boxShadow = "0.5px 0.5px 5px black"
  document.getElementById("card_10").style.boxShadow = "0.5px 0.5px 5px green"

}
