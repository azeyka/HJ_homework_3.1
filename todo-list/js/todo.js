document.addEventListener('DOMContentLoaded', init);

function init() {
  const doneList = document.querySelector('.done'),
        undoneList = document.querySelector('.undone'),
        tasks = document.querySelectorAll('.todo-list label input');

  Array.from(tasks).forEach(task => {
    task.addEventListener('click', moveTask);
  });
   
  function moveTask(event) {
    const checkbox = event.currentTarget;
    if (checkbox.hasAttribute('checked')) {
      checkbox.removeAttribute('checked');
      undoneList.appendChild(checkbox.parentElement);
    } else {
      checkbox.setAttribute('checked', 'checked');
      doneList.appendChild(checkbox.parentElement);
    };
  };
};