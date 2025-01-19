document.addEventListener("DOMContentLoaded", function() {

    let form = document.querySelector('form'); /*On cherche le formulaire dans le html*/

    form.addEventListener('submit', function(event) {
        
        event.preventDefault()
        
        
        const pseudo = document.getElementById('pseudo');/*On cherche le pseudo dans le html*/
    
        let motdepasse = document.getElementById('motdepasse'); /*On cherche le mot de passe dans le html*/

        if (motdepasse.value.length <8 ){ /*Avec length on calcule la taille de la chaine de caractère*/
            console.log('Votre mot de passe doit contenir au moins 8 caractères.')
            
        } 

        const content = document.getElementById('contenu-formulaire') /*On cherche le contenu-formulaire dans le html*/

        content.innerText= pseudo.value + ' ' + email.value /*On cherche le contenu du pseudo et du email dans l'input et on l'affiche dans le div qui a l'ID (contenu-formulaire)*/

    })
}); /*Fin du DOMContentLoaded*/ 

   
   



