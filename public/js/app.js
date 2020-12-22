window.onload = () => {

    // Apply light or dark theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
    }

}


// Whenever the user explicitly chooses light mode
themeSwitch = document.querySelector("#themeSwitch")
document.addEventListener("click", () => {
    if (localStorage.theme === "light") {
        localStorage.theme = 'dark'
        document.querySelector('html').classList.add('dark')
    } else {
        localStorage.theme = 'light'
        document.querySelector('html').classList.remove('dark')
    }
})