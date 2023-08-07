window.onload = function loadPage() {
  // declares
  const menuButton = document.querySelector('.nav-button');
  let toggleOpenClose = false;

  // functions
  function toggleOpenCloseMenu() {
    switch (toggleOpenClose) {
      case false:
        toggleOpenClose = true;
        document.querySelector('.nav-menu').style.display = 'flex';
        document.querySelector('.nav-menu').style.opacity = '1';
        document.querySelector('.navbar').style.width = '100%';
        document.querySelector('.navbar').style.background = '#f5f5f5';
        document.querySelector('.navbar').style.height = '100%';
        document.querySelector('.nav-logo img').style.width = '70%';
        document.querySelector('.nav-icon').src = 'images/mnu-close.svg';
        break;
      case true:
        toggleOpenClose = false;
        document.querySelector('.navbar').style.height = '50px';
        document.querySelector('.navbar').style.width = '50px';
        document.querySelector('.navbar').style.background = 'transparent';
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.nav-icon').src = 'images/menu-icon.png';
        break;
      default:
    }
  }

  // listeners
  menuButton.addEventListener('click', toggleOpenCloseMenu);
};