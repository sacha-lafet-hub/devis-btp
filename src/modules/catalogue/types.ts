export type PrestationCatalogue = {
  id: string;
  nom: string;
  unite: string;
  puHt: number;
  categorie: string;
};

export type CategorieCatalogue = {
  nom: string;
  items: PrestationCatalogue[];
};
