/*quand on est dans le darkmode, on entre dans une nouvelle variable*/
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')


/*activer le darkmode*/
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

/*désactiver le darkmode*/
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

/*quand on clique sur le bouton, on veut executer le code ci-dessous*/
/*si le darkmode n'est pas activé, on active le darkmode, si non on le désactive*/
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})