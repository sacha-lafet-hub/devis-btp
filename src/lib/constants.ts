export const UNITES = ["m²", "ml", "mL", "m³", "kg", "h", "u", "forfait"] as const;

export const TAUX_TVA = [0, 5.5, 10, 20] as const;

export const LIMITE_DEVIS_GRATUIT = 3;

export const STATUTS = {
  draft: "Brouillon",
  sent: "Envoyé",
  accepted: "Accepté",
  refused: "Refusé",
} as const;

export type StatutDevis = keyof typeof STATUTS;
