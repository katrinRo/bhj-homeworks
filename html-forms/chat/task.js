let modalChat = document.querySelector('.chat-widget__side');
let chat = document.querySelector('.chat-widget');
let input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages');

modalChat.addEventListener('click', (e) => {
    chat.classList.toggle('chat-widget_active');
});

function messageBot() {
    let date = new Date();
    let randomMessage = [
        "Добрый день",
        "Извините, но у меня лапки",
        "Кажется, вы ничего не спросили",
        "Бананы, кокосы",
        "Оставтье Ваш телефон"
    ];
    let random = Math.floor(Math.random() * randomMessage.length)
    let text = randomMessage[random];
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">${text}</div>
  </div>
`;
}

function addMessage(text, date) {
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">${text}</div>
  </div>
`;
   setTimeout(messageBot, 3000)
}

input.addEventListener('keyup', (e) => {
    var str = e.target.value.trim();
    if (str != "" && e.keyCode === 13) {
        addMessage(e.target.value, new Date());
        e.target.value = '';
    }
});