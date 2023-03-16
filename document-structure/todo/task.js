const addBtn = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');

function addTask(text) {
    let task = document.createElement('div');
    task.className = "task"
    task.innerHTML += `
        <div class = "task__title">${text}
        </div>
        <a href="#" class ="task__remove">&times;</a>
    `;
    list.appendChild(task);
}

function removeTask(e) {
    e.preventDefault();
    let parent = e.currentTarget.parentElement;
    parent.remove()
}

addBtn.addEventListener('click', (e) => {
    const inputText = document.getElementById('task__input');
    e.preventDefault();
    if (inputText.value != "") {
        addTask(inputText.value);
        inputText.value = "";
        const removeBtn = document.querySelectorAll('.task__remove');
        console.log(removeBtn)
        for (const i of removeBtn) {
            i.addEventListener('click', removeTask)
        }
    }
});