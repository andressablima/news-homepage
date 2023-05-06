/*const hambIcons = document.querySelector('.hamb-icons');
let menuOpen = false;

hambIcons.addEventListener('click', () => {
    if(!menuOpen) {
        hambIcons.classList.add('open');
        menuOpen = true;
    } else {
        hambIcons.classList.remove('open');
        menuOpen = false;
    }
});
*/

function animar() {
    const btn = document.getElementById('icon-menu')
    btn.classList.toggle('ative')
}