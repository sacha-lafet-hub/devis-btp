import type { StatutDevis } from "@/lib/constants";

export type LigneDevis = {
  id: string;
  designation: string;
  qte: number;
  unite: string;
  puHt: number;
  tva: number;
};

export type Devis = {
  id: string;
  numero: string;
  clientNom: string;
  clientSociete: string;
  clientTel: string;
  clientEmail: string;
  clientAdresse: string;
  chantierNom: string;
  chantierAdresse: string;
  chantierDescription: string;
  date: string;
  conditions: string;
  validite: string;
  codeClient: string;
  statut: StatutDevis;
  lignes: LigneDevis[];
  ht: number;
  ttc: number;
};

export type TotauxDevis = {
  ht: number;
  tva: number;
  ttc: number;
  parTva: { taux: number; montant: number }[];
};
