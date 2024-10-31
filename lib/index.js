const menuToggle = document.querySelector('.menuToggle');
const menuNav = document.querySelector('.menuNav');
const content = document.getElementById('content')

document.addEventListener("click", (e) => {
    
    const clicado = e.target; 

    console.log(clicado);
    
    if(clicado.classList.contains('bar') ||
     clicado.classList.contains('menuToggle') ||
     clicado.classList.contains('header'))   
    {
        menuNav.classList.toggle('active');

        // Alternar a exibição do menu
        if (menuNav.classList.contains('active')) {
            menuNav.style.display = 'flex'; // Mostrar o menu
            content.style.marginTop = '100px'
        } else {
            menuNav.style.display = 'none'; // Ocultar o menu
            content.style.marginTop = '0px'
        }
    }  
    else{
        menuNav.style.display = 'none'; // Ocultar o menu
            content.style.marginTop = '0px'
    }  
});
