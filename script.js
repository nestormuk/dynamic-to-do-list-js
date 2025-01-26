document.addEventListener('DOMContentLoaded', (event) => {
   
    const addButon = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    function addTask(){
        const taskText = document.getElementById('task-input').value.trim();

        if(taskText === ""){
            alert("Enter a task");
            return;
        }
        else{
            const newTask = document.createElement("li");
            newTask.textContent = taskText;

            const removeBtn = document.createElement("button");
            removeBtn.textContent ="Remove";
            removeBtn.className = "remove-btn";

            removeBtn.addEventListener('click', () =>{
                taskList.removeChild(newTask)
            });

            newTask.appendChild(removeBtn);
            taskList.appendChild(newTask);

            taskText.value = "";
        }
    }

    addButon.addEventListener('click' , addTask);
    taskInput.addEventListener('keypress', ()=>{
        if(event.key === "Enter"){
            addTask();
        }
    });

    
} );