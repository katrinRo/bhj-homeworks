const hasTooltip = document.querySelectorAll('.has-tooltip');

for (const i of hasTooltip) {
    let help = document.createElement('div');
    help.textContent = i.getAttribute('title');
    help.className = 'tooltip';
    i.insertAdjacentElement('beforeBegin', help)
    i.addEventListener('click', (e) => {
        e.preventDefault();
        const isHelp = document.querySelector('.tooltip_active');
        if (isHelp) {
            isHelp.remove();
        }
        help.classList.add('tooltip_active');
    })
}