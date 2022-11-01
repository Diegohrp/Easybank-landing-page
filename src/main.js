import './styles/header.scss';
import './styles/section-intro.scss';
import './styles/section-features.scss';
import './styles/section-articles.scss';
import './styles/footer.scss';

const hamburger = document.getElementById('menu-button');
const menuMobile = document.getElementById('menu-mobile');
let open = false;
function toogleMenu() {
  open = !open;
  if (open) {
    hamburger.className = 'close';
    menuMobile.style = 'display:block';
  } else {
    hamburger.className = 'open';
    menuMobile.style = 'display:none';
  }
}

hamburger.addEventListener('click', toogleMenu);
