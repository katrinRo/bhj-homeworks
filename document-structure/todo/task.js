const addBtn = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');

function addTask(text) {
    list.insertAdjacentHTML('beforeEnd',`<div class = "task">
        <div class = "task__title">${text}
        </div>
        <a href="#" class ="task__remove">&times;</a>
	</div>
    `);
}

function removeTask(e) {
    e.preventDefault();
    let parent = e.currentTarget.parentElement;
    parent.remove();
}

addBtn.addEventListener('click', (e) => {
    const inputText = document.getElementById('task__input');
    e.preventDefault();
    const text = inputText.value.trim();
    if (text != "") {
        addTask(inputText.value);
        inputText.value = "";
        const removeBtn = document.querySelectorAll('.task__remove');
        removeBtn[removeBtn.length - 1].addEventListener('click', removeTask);
    }
});