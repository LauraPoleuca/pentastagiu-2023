    const openFormButton = document.getElementById("openFormButton");
    const taskForm = document.getElementById("taskForm");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const assigneeInput = document.getElementById("assignee");
    const confirmButton = document.getElementById("confirmButton");
    const toDoSection = document.getElementById("toDoSection");

    function addTask(){
        const title =  titleInput.value;
        const description = descriptionInput.value
        const assignee = assigneeInput.value;

        let task = {
            title : title,
            description : description,
            assignee : assignee
        }

        let tasks;
        const taskElement = document.createElement("div");
        const storedTasks = localStorage.getItem("tasks");

        if (storedTasks != null){
            tasks = JSON.parse(storedTasks);
        }
        else{
            tasks = [];
        }

        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskElement.innerHTML = task.title + " " + task.description + " " + task.assignee;
        toDoSection.appendChild(taskElement);

        closeTaskForm();
    }

    function openTaskForm(){
        taskForm.showModal();
    }

    function closeTaskForm(){
        taskForm.close();
    }

    openFormButton.addEventListener("click", openTaskForm);
    confirmButton.addEventListener("click", addTask);
