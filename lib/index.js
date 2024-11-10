const menuToggle = document.querySelector('.menuToggle');
const menuNav = document.querySelector('.menuNav');
const content = document.getElementById('content');
const fToggle = document.getElementById("fToggle");

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    if(isExpanded)
    {
        content.style.marginTop = '0px';
        fToggle.style.height = '40px';
    }
  
else

fToggle.style.height = '190px';
});


if (localStorage.getItem("cookies-aceitos") === null) {
    // Exibe o banner de cookies se o usuário ainda não tomou uma decisão
    document.getElementById("cookie-banner").style.display = "block";
}

// Função para aceitar os cookies
document.getElementById("accept-cookies").addEventListener("click", function() {
    // Armazena a decisão do usuário no localStorage
    localStorage.setItem("cookies-aceitos", "sim");

    // Esconde o banner
    document.getElementById("cookie-banner").style.display = "none";
});

// Caso o usuário já tenha aceitado os cookies anteriormente, não mostrar o banner
if (localStorage.getItem("cookies-aceitos") === "sim") {
    document.getElementById("cookie-banner").style.display = "none";
}
