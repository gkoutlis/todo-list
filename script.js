const ergasia = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const lista = document.getElementById("todo-list");
let tasks =[];
    if (localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(t => createTask(t));


    }

function createTask(text){
    const listItem = document.createElement("li");
    listItem.classList.add("fade-start");
    listItem.textContent = text;
    listItem.addEventListener("click", function() {
    listItem.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    listItem.appendChild(deleteBtn);
    lista.appendChild(listItem); 
    setTimeout(function() {
    listItem.classList.add("fade-end");
    }, 20);
    deleteBtn.addEventListener("click", function() {
    listItem.remove();
    tasks = tasks.filter(t => t !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
});
}   
    

addBtn.addEventListener("click", function(){
    const kataxorisi = ergasia.value;
    if (kataxorisi.trim() == ""){
        return
    }
createTask(kataxorisi);
tasks.push(kataxorisi);
localStorage.setItem("tasks", JSON.stringify(tasks));
ergasia.value = "";
});

ergasia.addEventListener("keydown", function(event){
    if (event.key == "Enter")
        addBtn.click()
})






