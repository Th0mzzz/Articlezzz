document.addEventListener("DOMContentLoaded", () => {


    btnMode.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            iconMode.className = "bi bi-moon"

            localStorage.setItem('modo', 'light');
        } else {
            html.classList.add('dark');
            iconMode.className = "bi bi-brightness-high"

            localStorage.setItem('modo', 'dark');
        }
    });
})


