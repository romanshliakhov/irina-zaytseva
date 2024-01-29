// burger
let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.mobile');
let disableScroll = document.querySelector('body');

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    disableScroll.classList.toggle('body-scroll');
  })

  menu.querySelectorAll('.mobile a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      disableScroll.classList.remove('body-scroll');
    })
  })
}

