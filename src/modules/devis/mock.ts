import { calcTotaux } from "./calc";
import type { Devis, LigneDevis } from "./types";

function lignes(items: Omit<LigneDevis, "id">[]): LigneDevis[] {
  return items.map((item, i) => ({ ...item, id: `l-${i}` }));
}

const lignesMartin = lignes([
  { designation: "Enduit ciment extérieur", qte: 85, unite: "m²", puHt: 32, tva: 10 },
  { designation: "Échafaudage", qte: 1, unite: "forfait", puHt: 450, tva: 20 },
  { designation: "Nettoyage fin de chantier", qte: 1, unite: "forfait", puHt: 350, tva: 10 },
]);

const totauxMartin = calcTotaux(lignesMartin);

export const DEVIS_INITIAUX: Devis[] = [
  {
    id: "DEV-2024-001",
    numero: "DEV-2024-001",
    clientNom: "M. et Mme Martin",
    clientSociete: "",
    clientTel: "06 12 34 56 78",
    clientEmail: "martin@email.fr",
    clientAdresse: "8 avenue des Palmiers, 83990 Saint-Tropez",
    chantierNom: "Rénovation façade villa",
    chantierAdresse: "8 avenue des Palmiers, 83990 Saint-Tropez",
    chantierDescription: "Ravalement de façade, échafaudage et nettoyage compris",
    date: "2024-04-12",
    conditions: "30% à la commande — Solde à la livraison",
    validite: "2 mois",
    codeClient: "CLI-014",
    statut: "accepted",
    lignes: lignesMartin,
    ht: totauxMartin.ht,
    ttc: totauxMartin.ttc,
  },
  {
    id: "DEV-2024-002",
    numero: "DEV-2024-002",
    clientNom: "SCI Les Palmiers",
    clientSociete: "SCI Les Palmiers",
    clientTel: "04 94 00 11 22",
    clientEmail: "contact@sci-palmiers.fr",
    clientAdresse: "1 place de Lices, 83990 Saint-Tropez",
    chantierNom: "Piscine & dallage extérieur",
    chantierAdresse: "12 chemin des Pins, 83350 Ramatuelle",
    chantierDescription: "Terrassement, dalle et dallage pour piscine extérieure",
    date: "2024-04-28",
    conditions: "30% à la commande — Solde à la livraison",
    validite: "2 mois",
    codeClient: "CLI-022",
    statut: "sent",
    lignes: [],
    ht: 11500,
    ttc: 12650,
  },
];
