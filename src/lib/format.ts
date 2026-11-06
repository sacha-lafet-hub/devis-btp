export function formatEuro(n: number) {
  return (
    (n || 0).toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

export function formatDateFr(iso: string) {
  if (!iso) return new Date().toLocaleDateString("fr-FR");
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR");
}

export function todayIso() {
  return new Date().toISOString().split("T")[0];
}
