// Get required elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add" button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const task = taskInput.value.trim();

    if (task !== '') {
        // Create new task item
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span><button onclick="removeTask(this)">X</button>`;

        // Append task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}

// Function to toggle task completion
function toggleTaskCompletion(checkbox) {
    const li = checkbox.parentNode.parentNode;
    li.classList.toggle('completed');
  }
  
  // Function to add a new task
  function addTask() {
    const task = taskInput.value.trim();
  
    if (task !== '') {
      // Create new task item
      const li = document.createElement('li');
      li.innerHTML = `<span>${task}</span><input type="checkbox" onchange="toggleTaskCompletion(this)"><button onclick="removeTask(this)">X</button>`;
  
      // Append task item to the list
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    }
  }

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();

  if (task !== '') {
    // Create new task item
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><input type="checkbox" onchange="toggleTaskCompletion(this)"><button onclick="removeTask(this)">X</button>`;

    // Append task item to the list
    taskList.appendChild(li);

    // Save tasks to local storage
    saveTasksToLocalStorage();

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to remove a task
function removeTask(button) {
  const li = button.parentNode;
  li.parentNode.removeChild(li);

  // Save tasks to local storage
  saveTasksToLocalStorage();
}

// Function to toggle task completion
function toggleTaskCompletion(checkbox) {
  const li = checkbox.parentNode.parentNode;
  li.classList.toggle('completed');

  // Save tasks to local storage
  saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.getElementsByTagName('li')).map(li => ({
    task: li.getElementsByTagName('span')[0].textContent,
    completed: li.classList.contains('completed')
  }));

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks) {
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${task.task}</span><input type="checkbox" onchange="toggleTaskCompletion(this)"><button onclick="removeTask(this)">X</button>`;

      if (task.completed) {
        li.classList.add('completed');
      }

      taskList.appendChild(li);
    });
  }
}

// Load tasks from local storage when the page loads
loadTasksFromLocalStorage();


// Add event listener to the "Mark All Completed" button
const markAllCompletedBtn = document.getElementById('markAllCompletedBtn');
markAllCompletedBtn.addEventListener('click', markAllTasksCompleted);

// Function to mark all tasks as completed
function markAllTasksCompleted() {
  const tasks = Array.from(taskList.getElementsByTagName('li'));
  tasks.forEach(li => {
    li.classList.add('completed');
  });

  // Save tasks to local storage
  saveTasksToLocalStorage();
}