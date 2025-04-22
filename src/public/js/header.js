import { $, stringToBool } from "./index.js";

const menuButton = $('#id-menu-button');
const menuContent = $('#id-menu-navigation');
const mainContent = $('#id-main-content');
const sizeWidthMenuContent = menuContent.offsetWidth;
const sizeWidthMainContent = mainContent.offsetWidth;

function showMenuBar(isOpen) {
  menuContent.style.left = isOpen ? 0 : `-${sizeWidthMenuContent}px`;
  mainContent.style.transform = `translate(${isOpen ? sizeWidthMenuContent + 'px' : '0px'}, 0px)`;
  mainContent.style.width = isOpen ? `${(sizeWidthMainContent - sizeWidthMenuContent)}px` : `${sizeWidthMainContent}px`;
  // mainContent.style.marginLeft = isOpen ? `${sizeWidthhMenuContent}px` : 0;
}

menuButton.addEventListener('click', (e) => {
  const menuIsOpen = stringToBool(menuButton.getAttribute('aria-expanded'));
  showMenuBar(!menuIsOpen);
  menuButton.setAttribute('aria-expanded', !menuIsOpen)
  menuButton.style.backgroundImage = !menuIsOpen ? 'url(/icons/menu-close.svg)' : 'url(/icons/menu-open.svg)';
})