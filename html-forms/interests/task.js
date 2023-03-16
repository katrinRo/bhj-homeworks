const interest = document.querySelectorAll('.interest__check');

for (let i of interest) {
    i.addEventListener('change', (e) => {
        const interestActive = e.currentTarget.closest('.interests_active');
        if (interestActive) {
            const children = interestActive.querySelectorAll('.interest__check');
            const chekevery = Array.from(children).every(element => element.checked);
            const cheksome = Array.from(children).some(element => element.checked);
            const parent = interestActive.previousElementSibling.querySelector('.interest__check');
            parent.checked = chekevery;
            parent.indeterminate = cheksome && !chekevery;
        } else {
            const parrent = e.currentTarget.parentElement;
            const children = parrent.nextElementSibling.querySelectorAll('.interest__check');
            if (e.currentTarget.checked === true) {
                Array.from(children).map(i => i.checked = true);
            } else {
                Array.from(children).map(i => i.checked = false);
            }
        }
    })
}

