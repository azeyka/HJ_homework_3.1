document.addEventListener('DOMContentLoaded', init);

function init() {
  const controls = document.querySelector('.tabs-nav'),
        exampleTab = controls.firstElementChild,
        content = document.querySelector('.tabs-content'),
        articles = content.children;
  
  controls.removeChild(exampleTab);
  
  Array.from(articles).forEach(article => {
    article.classList.add('hidden');
    controls.appendChild(exampleTab.cloneNode(true));
    const currentTab = controls.lastChild;
    currentTab.innerHTML = article.dataset.tabTitle;
    currentTab.classList.add(article.dataset.tabIcon);
    currentTab.addEventListener('click', changeArticle);
  });
  
  controls.firstElementChild.classList.add('ui-tabs-active');
  articles[0].classList.remove('hidden');
  
  function changeArticle(event) {
    Array.from(controls.children).forEach(tab => {
      tab === event.currentTarget ? tab.classList.add('ui-tabs-active') : tab.classList.remove('ui-tabs-active')
    });
    Array.from(articles).forEach(article => {
      article.dataset.tabTitle === event.currentTarget.innerHTML ? article.classList.remove('hidden') :
                                                                   article.classList.add('hidden');
    });
  }; 
};