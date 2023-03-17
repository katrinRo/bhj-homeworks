const hasTooltip = document.querySelectorAll('.has-tooltip');

for (const i of hasTooltip) {
    let help = document.createElement('div');
    help.textContent = i.getAttribute('title');
    help.className = 'tooltip';
    const {left, top} = i.getBoundingClientRect();
    help.style.marginTop = 5 + 'px';
    help.style.left = left + 'px';
    i.insertAdjacentElement('afterend', help)
    i.addEventListener('click', (e) => {
        e.preventDefault();
        const isHelp = document.querySelector('.tooltip_active');
        if (isHelp) {
            isHelp.classList.remove('tooltip_active');
        }
        help.classList.add('tooltip_active');
    })
}