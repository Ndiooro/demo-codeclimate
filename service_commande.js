/**
 * CODE "MOYEN" (Objectif : Grade B ou A-)
 * Défauts légers : Logique répétitive, manque d'abstraction, nomenclature floue.
 */

function process(item, q, p) { // Smell : Noms de variables peu clairs (q, p)
    let total = 0;

    // Logique de réduction (Un peu répétitive)
    if (q > 10) {
        total = (item.price * q) * 0.9; // 10% réduction
    } else if (q > 5) {
        total = (item.price * q) * 0.95; // 5% réduction
    } else {
        total = item.price * q;
    }

    // Smell : Un bloc de code qui pourrait être extrait
    console.log("Préparation de la commande pour : " + item.name);
    console.log("Quantité : " + q);
    console.log("Prix unitaire : " + item.price);
    console.log("Total calculé : " + total);

    // Simulation d'une petite duplication
    const shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 7);
    
    return {
        id: Math.random().toString(36).substr(2, 9),
        finalPrice: total,
        delivery: shippingDate
    };
}

// Une deuxième fonction presque similaire pour créer un léger "Code Smell" de duplication
function processGift(item, q) {
    let total = (item.price * q) * 0.8; // 20% réduction cadeau
    
    console.log("Préparation du CADEAU pour : " + item.name);
    console.log("Quantité : " + q);
    console.log("Prix unitaire : " + item.price);
    
    const shippingDate = new Date();
    shippingDate.setDate(shippingDate.getDate() + 10);

    return {
        id: "GIFT-" + Math.random().toString(36).substr(2, 9),
        finalPrice: total,
        delivery: shippingDate
    };
}
