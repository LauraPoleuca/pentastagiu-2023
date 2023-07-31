    const addTaskButton = document.getElementById("addButton");
    const dialogBox = document.getElementById("dialog");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const assigneeInput = document.getElementById("assignee");
    const confirmButton = document.getElementById("confirmButton");
    const toDoSection = document.getElementById("toDoSection");

    function getInput(){
        toDoSection.innerHTML = titleInput.value + " " + descriptionInput.value + " " + assigneeInput.value; 
    }

    addTaskButton.addEventListener("click", () => {dialogBox.showModal();});
    confirmButton.addEventListener("click", getInput);
