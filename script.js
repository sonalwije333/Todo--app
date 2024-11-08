

document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement('li');
    li.className = "flex items-center bg-gray-100 p-2 rounded-lg shadow-sm";

    // Checkbox to mark task complete
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mr-2 ';
    checkbox.addEventListener('change', () => toggleComplete(li));

    // Task text
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    taskTextElement.className = "flex-grow";

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "ml-2 text-black hover:text-red-700";
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', () => deleteTask(li));

    // Append elements to the task list item
    li.appendChild(checkbox);
    li.appendChild(taskTextElement);
    li.appendChild(deleteButton); 

    // Add the task to the list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
}

function toggleComplete(taskElement) {
 
  taskElement.classList.toggle('line-through');
}

function deleteTask(taskElement) {

  taskElement.remove();
}
