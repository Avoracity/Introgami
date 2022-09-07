
    export function menuToggle(){
        if (process.client) {
            const toggleMenu = document.querySelector('.menu');
            toggleMenu.classList.toggle('active');
        }

    }
