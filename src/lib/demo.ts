/**
 * Demovergrendeling.
 *
 * Zolang NEXT_PUBLIC_DEMO_LOCK op "1" staat, openen de dieper gelegen
 * pagina's niet maar tonen ze een venster met de melding dat dit een
 * demoversie is. Zet de variabele op iets anders of verwijder ze bij de
 * oplevering, dan werkt de hele site gewoon.
 *
 * Open in de demo: homepagina, dienstenoverzicht, realisaties, contact
 * en het privacybeleid. Dat is het volledige verkoopverhaal.
 */
export const demoLocked = process.env.NEXT_PUBLIC_DEMO_LOCK === "1";

export function isLockedPath(href: string): boolean {
  if (!demoLocked) return false;
  if (!href.startsWith("/")) return false;

  const path = href.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  if (path === "/over-ons") return true;
  if (path === "/werkgebied" || path.startsWith("/werkgebied/")) return true;
  if (path.startsWith("/diensten/")) return true;

  return false;
}
