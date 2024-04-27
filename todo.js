const todosList = document.getElementById('todos-list');

async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    todos.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Pending'}`;
      todosList.appendChild(todoItem);
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
    alert('Failed to fetch todos. Please try again later.');
  }
}

fetchTodos();
