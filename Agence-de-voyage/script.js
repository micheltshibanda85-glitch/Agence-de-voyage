document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. GESTION DU MENU MOBILE (BURGER)
    // ==========================================
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            // On change l'icône (burger vers croix)
            const icon = menuToggle.querySelector("i");
            if (nav.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    // ==========================================
    // 2. GESTION DU FORMULAIRE (Envoi vers WhatsApp)
    // ==========================================
    const form = document.querySelector("#contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Récupération des valeurs
            const nom = document.querySelector("#nom").value;
            const expediteur = document.querySelector("#pays-expedition").value;
            const message = document.querySelector("#message").value;
            const telephone = "14386386200"; // Numéro de ta tante

            // Création du message WhatsApp
            const texteWhatsApp = `Bonjour KINEX FREIGHT, je suis ${nom}. Je souhaite envoyer un colis depuis ${expediteur}. Mon message : ${message}`;
            
            // Encodage du texte pour l'URL
            const texteEncode = encodeURIComponent(texteWhatsApp);
            
            // Ouverture de WhatsApp dans un nouvel onglet
            window.open(`https://wa.me/${telephone}?text=${texteEncode}`, "_blank");
            
            form.reset(); // Vide le formulaire
        });
    }
});