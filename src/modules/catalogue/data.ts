import type { CategorieCatalogue } from "./types";

/** Prestations de départ, identiques à la maquette. */
export const CATALOGUE_INITIAL: CategorieCatalogue[] = [
  {
    nom: "Terrassement",
    items: [
      { id: "t1", nom: "Décapage terre végétale", unite: "m²", puHt: 8, categorie: "Terrassement" },
      { id: "t2", nom: "Terrassement en fouille", unite: "m³", puHt: 45, categorie: "Terrassement" },
      { id: "t3", nom: "Remblai et compactage", unite: "m³", puHt: 28, categorie: "Terrassement" },
      { id: "t4", nom: "Évacuation de gravats", unite: "m³", puHt: 35, categorie: "Terrassement" },
    ],
  },
  {
    nom: "Fondations",
    items: [
      { id: "f1", nom: "Semelles filantes béton", unite: "ml", puHt: 95, categorie: "Fondations" },
      { id: "f2", nom: "Semelles isolées", unite: "u", puHt: 180, categorie: "Fondations" },
      { id: "f3", nom: "Dalle béton armé e=15cm", unite: "m²", puHt: 65, categorie: "Fondations" },
      { id: "f4", nom: "Chape ciment e=5cm", unite: "m²", puHt: 28, categorie: "Fondations" },
    ],
  },
  {
    nom: "Maçonnerie",
    items: [
      { id: "m1", nom: "Mur parpaing 20cm", unite: "m²", puHt: 55, categorie: "Maçonnerie" },
      { id: "m2", nom: "Mur parpaing 15cm", unite: "m²", puHt: 48, categorie: "Maçonnerie" },
      { id: "m3", nom: "Mur en brique", unite: "m²", puHt: 72, categorie: "Maçonnerie" },
      { id: "m4", nom: "Enduit ciment extérieur", unite: "m²", puHt: 32, categorie: "Maçonnerie" },
      { id: "m5", nom: "Enduit ciment intérieur", unite: "m²", puHt: 24, categorie: "Maçonnerie" },
      { id: "m6", nom: "Coffrage bois", unite: "m²", puHt: 42, categorie: "Maçonnerie" },
    ],
  },
  {
    nom: "Béton / Structure",
    items: [
      { id: "b1", nom: "Béton banché e=20cm", unite: "m²", puHt: 88, categorie: "Béton / Structure" },
      { id: "b2", nom: "Béton coulé en place", unite: "m³", puHt: 145, categorie: "Béton / Structure" },
      { id: "b3", nom: "Ferraillage acier HA", unite: "kg", puHt: 2.8, categorie: "Béton / Structure" },
      { id: "b4", nom: "Poutre béton armé", unite: "ml", puHt: 120, categorie: "Béton / Structure" },
    ],
  },
  {
    nom: "Divers & Forfaits",
    items: [
      { id: "d1", nom: "Installation chantier", unite: "forfait", puHt: 650, categorie: "Divers & Forfaits" },
      { id: "d2", nom: "Nettoyage fin de chantier", unite: "forfait", puHt: 350, categorie: "Divers & Forfaits" },
      { id: "d3", nom: "Fourniture et pose regard", unite: "u", puHt: 180, categorie: "Divers & Forfaits" },
    ],
  },
];
