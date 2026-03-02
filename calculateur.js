// Problème 1 : Complexité Cognitive énorme (trop d'imbrications)
function evaluerRisque(age, score, historique, ville, anciennete, typeClient) {
    if (age > 18) {
        if (score > 500) {
            if (historique === "bon") {
                if (ville === "Dakar") {
                    if (anciennete > 2) {
                        if (typeClient === "Premium") {
                            return "Risque Faible";
                        } else { return "Risque Moyen"; }
                    } else { return "Risque Elevé"; }
                } else { return "Zone non couverte"; }
            } else { return "Refusé"; }
        } else { return "Score insuffisant"; }
    } else { return "Mineur"; }
}

// Problème 2 : Duplication massive (Copier-coller)
function evaluerRisqueCopie(age, score, historique, ville, anciennete, typeClient) {
    if (age > 18) {
        if (score > 500) {
            if (historique === "bon") {
                if (ville === "Dakar") {
                    if (anciennete > 2) {
                        if (typeClient === "Premium") {
                            return "Risque Faible";
                        } else { return "Risque Moyen"; }
                    } else { return "Risque Elevé"; }
                } else { return "Zone non couverte"; }
            } else { return "Refusé"; }
        } else { return "Score insuffisant"; }
    } else { return "Mineur"; }
}
