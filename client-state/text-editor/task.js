const editor = document.getElementById('editor');
editor.value = localStorage.getItem('value');

editor.addEventListener('input', () => {
    localStorage.clear();
   localStorage.setItem('value',editor.value)
})