# To-Do_List
This code represents a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them as completed, and remove them from the list. The tasks are stored in the browser's local storage, so they persist even after refreshing the page.

The HTML structure consists of a container div that holds the heading, input field for adding tasks, an "Add" button, a "Mark All Completed" button, and an unordered list for displaying the tasks.

The CSS file defines the styles for various elements, including the overall layout, input field, buttons, and the appearance of completed tasks.

The JavaScript code handles the functionality of the To-Do List. It starts by selecting necessary elements from the DOM, such as the input field, buttons, and task list. It then attaches an event listener to the "Add" button, which triggers the addTask() function when clicked.

The addTask() function takes the value from the input field, creates a new task item using the provided value, appends it to the task list, and clears the input field. It also calls the saveTasksToLocalStorage() function to save the updated list of tasks to the browser's local storage.

The removeTask() function is responsible for removing a task from the list. It receives the button element as an argument, finds the corresponding parent list item (li), and removes it from the DOM. It also calls saveTasksToLocalStorage() to update the storage.

The toggleTaskCompletion() function toggles the completion status of a task. It receives the checkbox element as an argument, finds the parent list item (li), and adds or removes the "completed" class to visually indicate completion. It also calls saveTasksToLocalStorage() to update the storage.

The saveTasksToLocalStorage() function retrieves all the list items, iterates over them, and saves their task content and completion status as an array in the browser's local storage, using JSON.stringify.

The loadTasksFromLocalStorage() function retrieves the tasks array from local storage, creates list items for each task, and appends them to the task list. If a task was marked as completed, the function adds the "completed" class to the list item.

Finally, the code sets up an event listener for the "Mark All Completed" button, which triggers the markAllTasksCompleted() function. This function adds the "completed" class to all list items, effectively marking all tasks as completed. It also calls saveTasksToLocalStorage() to update the storage.

Overall, this code provides a basic implementation of a To-Do List application with the ability to add, remove, mark tasks as completed, and persist the task list using the browser's local storage.