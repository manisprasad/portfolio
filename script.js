const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
    const root = document.documentElement;

    if (root.style.getPropertyValue('--background-dark-color') === '#10121A') {
        // Switch to light mode
        root.style.setProperty('--primary-color', '#007bff');
        root.style.setProperty('--secondary-color', '#6c757d');
        root.style.setProperty('--background-dark-color', '#f1f1f1');
        root.style.setProperty('--background-dark-grey', '#f9f9f9');
        root.style.setProperty('--border-color', '#dcdcdc');
        root.style.setProperty('--background-light-color', '#ffffff');
        root.style.setProperty('--background-light-color-2', '#eeeeee');
        root.style.setProperty('--white-color', '#000');
        root.style.setProperty('--font-light-color', '#000000');
        root.style.setProperty('--font-dark-color', '#313131');
        root.style.setProperty('--font-dark-color-2', '#151515');
        root.style.setProperty('--sidebar-dark-color', '#ffffff');
        toggleButton.classList.remove("fa-sun")
        toggleButton.classList.add("fa-moon")

    } else {
        // Switch to dark mode
        root.style.setProperty('--primary-color', '#007bff');
        root.style.setProperty('--secondary-color', '#6c757d');
        root.style.setProperty('--background-dark-color', '#10121A');
        root.style.setProperty('--background-dark-grey', '#191D2B');
        root.style.setProperty('--border-color', '#2e344e');
        root.style.setProperty('--background-light-color', '#f1f1f1');
        root.style.setProperty('--background-light-color-2', '#f9f9f9');
        root.style.setProperty('--white-color', '#fff');
        root.style.setProperty('--font-light-color', '#a4acc4');
        root.style.setProperty('--font-dark-color', '#313131');
        root.style.setProperty('--font-dark-color-2', '#151515');
        root.style.setProperty('--sidebar-dark-color', '#191D2B');
        toggleButton.classList.remove("fa-moon")
        toggleButton.classList.add("fa-sun")
    }
});

document.getElementById("mode-toggle").addEventListener("click", function() {
    let darkModeIcon = document.querySelector("#mode-toggle .dark-mode");
    
    if(darkModeIcon.classList.contains("fa-sun")){
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    } else {
        darkModeIcon.classList.add("fa-sun");
        darkModeIcon.classList.remove("fa-moon");
    }
});