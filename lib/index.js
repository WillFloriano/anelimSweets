const menuToggle = document.querySelector('.menuToggle');
const menuNav = document.querySelector('.menuNav');
const content = document.getElementById('content');

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    if(isExpanded)
    content.style.marginTop = '0px';
else
content.style.marginTop = '100px';
});
