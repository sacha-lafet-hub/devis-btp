import type { LigneDevis, TotauxDevis } from "./types";

export function totalLigneHt(ligne: LigneDevis) {
  return (ligne.qte || 0) * (ligne.puHt || 0);
}

export function calcTotaux(lignes: LigneDevis[]): TotauxDevis {
  const map = new Map<number, number>();
  let ht = 0;

  for (const ligne of lignes) {
    const ligneHt = totalLigneHt(ligne);
    ht += ligneHt;
    const taux = ligne.tva || 0;
    map.set(taux, (map.get(taux) || 0) + (ligneHt * taux) / 100);
  }

  const parTva = [...map.entries()]
    .filter(([, montant]) => montant > 0)
    .sort((a, b) => a[0] - b[0])
    .map(([taux, montant]) => ({ taux, montant }));

  const tva = parTva.reduce((s, x) => s + x.montant, 0);
  return { ht, tva, ttc: ht + tva, parTva };
}
