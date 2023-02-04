//interação dos botões
            // variaveis cards
let cards = Array.from(document.querySelectorAll(".card"));
            // variaveis botões
let buttons = Array.from(document.querySelectorAll(".comprar"));
            // variaveis textos cards
let cardText = Array.from(document.querySelectorAll(".card-text"));

    // atribuindo funçao mostrar botão
cards.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {

       
       buttons[index].style.visibility = "visible";
       buttons[index].style.height = "auto";
    });

    //  atribuindo função para esconder botão
    element.addEventListener("mouseleave",() => {

        // cardText[index].style.height = "auto"
        buttons[index].style.visibility = 'hidden';
        buttons[index].style.height ="auto";
    });
});

        // atribuindo Modal entre em contato
let modalCard = null;
let modal = document.querySelector("#modal");
let modalLugar = document.querySelector("#modalLugar");
// console.log(modalLugar)

    // função para não chamar um modal sobre outro
modal.addEventListener("click",() =>{
    if (modalCard !== null){
        modalCard.remove();
    }


    // mostrar mensagem com informações e contato
    modalCard = document.createElement("div");
    modalLugar.style.visibility = "visible";
    modalLugar.removeAttribute("hidden")
    
    modalCard.innerHTML = `<div class="modalAtendimento"><button><img src="imagens/fechar.svg" onClick="closeModal()"></button>
    <h1>Atendimento</h1>
    <p>Rua José de Alencar, 111, Centro<br>
    CEP: 12209-000 | +55 (11) 3333-8000</p>
     <button>ENTRAR EM CONTATO</button>
    </div>`;
    
    modalLugar.append(modalCard);
});
    
closeModal = () => {
    modalLugar.style.visibility = "hidden";
};
