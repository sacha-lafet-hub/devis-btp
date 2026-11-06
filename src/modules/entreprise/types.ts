export type Entreprise = {
  nom: string;
  logoInitiales: string;
  tel: string;
  email: string;
  adresse: string;
  siret: string;
  tvaNum: string;
  forme: string;
  tvaDefaut: number;
  prefixe: string;
  conditionsDefaut: string;
};

export type Plan = "free" | "pro";
