const anchorButtons = document.querySelectorAll('.anchor');

window.addEventListener('DOMContentLoaded', () => {
  anchorButtons.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
})
