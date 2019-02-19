document.addEventListener('DOMContentLoaded', init);

function init() {
  const buttons = document.querySelectorAll('.slider-nav a'),
        nextBtn = buttons[1],
        prevBtn = buttons[0],
        firstBtn = buttons[2],
        lastBtn = buttons[3],
        slides = document.querySelectorAll('.slides .slide');
  let activeElement = slides[0];
  activeElement.classList.add('slide-current');
  updateControls();
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', moveSlide);
  });
  
  function moveSlide(event) {
    if (event.currentTarget.classList.contains('disabled')){
      event.preventDefault();
      return;
    };
    
    activeElement.classList.remove('slide-current');
    switch (event.currentTarget.dataset.action) {
      case 'prev':
        activeElement = activeElement.previousElementSibling;
        break;
      case 'next':
        activeElement = activeElement.nextElementSibling;
        break;
      case 'first':
        activeElement = activeElement.parentElement.firstElementChild;
        break;  
      case 'last':
        activeElement = activeElement.parentElement.lastElementChild;
        break; 
    };
    activeElement.classList.add('slide-current');
    updateControls();
  };
   
  function updateControls() {
    activeElement.nextElementSibling ? nextBtn.classList.remove('disabled') : nextBtn.classList.add('disabled');
    activeElement.previousElementSibling ? prevBtn.classList.remove('disabled') : prevBtn.classList.add('disabled');
    activeElement === activeElement.parentElement.firstElementChild ? firstBtn.classList.add('disabled') :
                                                                      firstBtn.classList.remove('disabled');
    activeElement === activeElement.parentElement.lastElementChild ? lastBtn.classList.add('disabled') :
                                                                     lastBtn.classList.remove('disabled');
  };
};