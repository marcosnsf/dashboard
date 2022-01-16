//Definindo Variaveis de menu
let iconMenu = document.getElementById('iconMenu'); //usada para manipular o icone de menu
let sideBar = document.getElementById('sideBar'); // usada pra manipular a sidebar
let mainContent = document.getElementById('mainContent'); // usadas para manipular o main 
let hide = document.getElementById('hide'); // usadas para manipular o hide 
let w = window.innerWidth; // variavel responsavel para verificar o tamanho da tela
sideBar.style.left = '-320px';
//

//adicionando evento
window.addEventListener("resize", () => {
    w = window.innerWidth;
    console.log(w);
})
if (sideBar <= 768) {
    sideBar.classList.add(hide);
} else {
    sideBar.classList.remove(hide);
}
//

//Funcão de menu
function responsiveSidebar() {
    if (w <= 671) { //condiçaõ para mobile
        if (sideBar.classList.contains('hide') || sideBar.style.left == '-320px') {
            sideBar.style.left = '0px';
            console.log('ATIVADO')

        } else {
            sideBar.style.left = '-320px';
            console.log('DESATIVADO')
        }
    } else { //condiçao para desktop
        if (sideBar.style.display == 'none') { // condição se estiver ativado o evento
            sideBar.style.display = 'block';
            mainContent.style.width = 'calc(100% - 320px)';
            mainContent.style.transition = 'all 0.3s';
        } else { // condição se não estiver ativado o evento
            sideBar.style.display = 'none';
            mainContent.style.width = '100%';
            mainContent.style.transition = 'all 0.3s';
        }
    }
}
//