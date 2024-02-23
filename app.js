document.addEventListener("DOMContentLoaded", function() {
    // Check for saved tasks in localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Display existing tasks
    displayTasks();

    // Function to add a new task
    window.addTask = function() {
        //gets the content of the textbox by its id.
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks();
        }
    };

    // Function to delete a task
    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    };

    // Function to update a task
    window.updateTask = function(index) {
        const updatedText = prompt("Update task:", tasks[index]);
        if (updatedText !== null) {
            tasks[index] = updatedText.trim();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }
    };

    // Function to display tasks in the UI
    function displayTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="updateTask(${index})">Update</button>
            `;
            taskList.appendChild(li);
        });
    }
});
