'use strict';

const myTasks = document.querySelector('.js_countTask');
const myList = document.querySelector('.js_myList');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

function printTask() {
  myList.innerHTML = '';
  let complete = 0;
  let pending = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      myList.innerHTML += `<li class="completed"><input type="checkbox" checked class="checkbox js_checkbox" id="${i}" />${tasks[i].name}</li>`;
      complete = complete + 1;
    } else {
      myList.innerHTML += `<li><input type="checkbox" class="checkbox js_checkbox" id="${i}" />${tasks[i].name}</li>`;
      pending = pending + 1;
    }

    myTasks.innerHTML = `Tienes ${tasks.length} tareas. ${complete} completadas y ${pending} por realizar`;
  }

  const allCheckbox = document.querySelectorAll('.js_checkbox');
  for (const checkbox of allCheckbox) {
    checkbox.addEventListener('click', handleClickCheckbox);
  }
}

function handleClickCheckbox(event) {
  console.log(event.currentTarget.checked);

  const taskNum = event.currentTarget.id;
  if (tasks[taskNum].completed === true) {
    tasks[taskNum].completed = false;
  } else {
    tasks[taskNum].completed = true;
  }

  console.log(tasks);
  printTask();
}

printTask();
