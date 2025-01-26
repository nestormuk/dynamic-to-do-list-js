document.addEventListener('DOMContentLoaded', (event) => {
   
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask(){
       

        if(taskInput.value.trim() === ""){
            alert("Enter a task");
            return;
        }
        else{
            const newTask = document.createElement("li");
            newTask.textContent = taskInput.value;
            

            const removeBtn = document.createElement("button");
            removeBtn.textContent ="Remove";
            removeBtn.className = "remove-btn";

            removeBtn.addEventListener('click', () =>{
                taskList.removeChild(newTask)
            });

            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);

            taskInput.value = "";
        }
    }

    addButton.addEventListener('click' , addTask);
    taskInput.addEventListener('keypress', ()=>{
        if(event.key === "Enter"){
            addTask();
        }
    });

    
} );