const menuToggle = document.querySelector('.menuToggle');
const menuNav = document.querySelector('.menuNav');
const content = document.getElementById('content')

document.addEventListener("click", (e) => {
    
    const clicado = e.target; 
    
    if(clicado.classList.contains('menuToggle') &&
       !menuNav.classList.contains('active'))        
    {
        menuNav.classList.toggle('active');
        content.style.marginTop = '100px'

    }  
    else{
        menuNav.style.display = 'none'; // Ocultar o menu
        content.style.marginTop = '0px'
    }  
});
