document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize elements after DOM is fully loaded
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage after initialization
    loadTasks();

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    function addTask(taskText, save = true) {
        taskText = taskInput.value.trim();

        if (taskInput === "") {
            alert("Enter a task");
            return;
        } else {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");

            removeBtn.addEventListener('click', () => {
                taskList.removeChild(newTask);

                if (save) {
                    // Remove the task from local storage
                    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                    const updatedTasks = storedTasks.filter(task => task !== taskText);
                    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                }
            });

            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);

            taskInput.value = ""; // Clear the input field
        }

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Add event listeners for adding tasks
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
