/**
 * CODE VULNÉRABLE (Objectif : Alertes de Sécurité)
 * Failles : Injection SQL, Cryptographie faible, Hardcoded Secrets.
 */

const crypto = require('crypto');

// ERREUR DE SÉCURITÉ 1 : Donnée sensible en dur (Hardcoded Secret)
const API_KEY = "sk_live_51Mabc12345XYZsecretKey"; 

function loginUser(db, username, password) {
    
    // ERREUR DE SÉCURITÉ 2 : Injection SQL (Concaténation directe)
    // Un utilisateur pourrait entrer : ' OR '1'='1
    const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
    
    db.execute(query);

    // ERREUR DE SÉCURITÉ 3 : Algorithme de hachage obsolète (MD5)
    // MD5 n'est plus sécurisé pour les mots de passe
    const hash = crypto.createHash('md5').update(password).digest('hex');

    console.log("Tentative de connexion pour l'utilisateur : " + username);
    return hash;
}

// ERREUR DE SÉCURITÉ 4 : Désactivation de la vérification TLS/SSL (Danger)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

function getAdminData() {
    // Utilisation d'une clé API en dur dans une URL
    return `https://api.monsite.com/data?key=${API_KEY}`;
}
