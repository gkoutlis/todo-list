const ergasia = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const lista = document.getElementById("todo-list");
let tasks =[];
    if (localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(t => createTask(t));


    }

function createTask(task){
    const listItem = document.createElement("li");
    listItem.classList.add("fade-start");

    listItem.textContent = task.text;

    if (task.completed) {
        listItem.classList.add("completed");
    }
    listItem.addEventListener("click", function() {
        listItem.classList.toggle("completed");

        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    listItem.appendChild(deleteBtn);
    lista.appendChild(listItem); 
    setTimeout(function() {
    listItem.classList.add("fade-end");
    }, 20);
    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        listItem.remove();

    tasks = tasks.filter(t => t.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
});
}   
    

addBtn.addEventListener("click", function(){
    const inputValue = ergasia.value;

    if (inputValue.trim() == ""){
        return
    }

    const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,

    };
    
createTask(newTask);
tasks.push(newTask);
localStorage.setItem("tasks", JSON.stringify(tasks));
ergasia.value = "";
});

ergasia.addEventListener("keydown", function(event){
    if (event.key == "Enter")
        addBtn.click()
})






