//Definindo Variaveis de menu
let iconMenu = document.getElementById('iconMenu'); //usada para manipular o icone de menu
let sideBar = document.getElementById('sideBar'); // usada pra manipular a sidebar
let mainContent = document.getElementById('mainContent'); // usadas para manipular o main 
let w = window.innerWidth; // variavel responsavel para verificar o tamanho da tela
//

//adicionando evento
window.addEventListener("resize", () => {
    w = window.innerWidth;
    console.log(w);
})
//

//Funcão de menu
function responsiveSidebar() {
    if (w <= 671) { //condiçaõ para mobile
        alert('ola mundo') 
    } else { //condiçao para desktop
        if (sideBar.style.display == 'none') { // condição se estiver ativado o evento
            sideBar.style.display = 'block';
            mainContent.style.width = 'calc(100% - 320px)';
            mainContent.style.transition  = '0.3s';
        } else { // condição se não estiver ativado o evento
            sideBar.style.display = 'none';
            mainContent.style.width = '100%';
            mainContent.style.transition  = '0.3s';
        }
    }
}
//