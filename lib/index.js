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
