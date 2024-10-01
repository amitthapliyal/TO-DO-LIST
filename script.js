// Get the button and input field
const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to add a task
addButton.addEventListener("click", function() {
    const taskText = taskInput.value; // Get the input value

    if (taskText) {
        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText; // Set the text of the list item

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove(); // Remove the task when button is clicked
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
});
