  // Get DOM elements
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  
  // Event listener for form submission
  todoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const todoText = todoInput.value;
      if (todoText.trim() !== '') {
          addTodoItem(todoText);
          todoInput.value = '';
      }
  });
  
  // Create a new todo item
  function addTodoItem(text) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <span>${text}</span>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
      `;
  
      // Event listeners for edit and delete buttons
      const editButton = listItem.querySelector('.edit');
      const deleteButton = listItem.querySelector('.delete');
  
      editButton.addEventListener('click', function () {
          editTodoItem(listItem);
      });
  
      deleteButton.addEventListener('click', function () {
          deleteTodoItem(listItem);
      });
  
      todoList.appendChild(listItem);
  }
  
  // Edit a todo item
  function editTodoItem(listItem) {
      const span = listItem.querySelector('span');
      const newText = prompt('Edit item:', span.textContent);
      if (newText !== null) {
          span.textContent = newText;
      }
  }
  
  // Delete a todo item
  function deleteTodoItem(listItem) {
      listItem.remove();
  }                                                  