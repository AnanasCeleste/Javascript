document.addEventListener("DOMContentLoaded", function() {
    let listMenu = document.querySelectorAll('li')
console.log(listMenu)
listMenu.forEach(item => {
    item.addEventListener('click', function() {
    this.classList.toggle('active')
    console.log("ok2")

    if (this.classList.contains('tabmenu1')) {
        document.getElementsById('contenu1').classList.add('afficher-contenu')
    }

    }) /* fin du EventListener */
})
  });