export type Case = {
  slug: string;
  service: string;
  title: string;
  caption: string;
  aspect: "4/3" | "3/4";
  tag: string;
};

/**
 * Voor- en nafoto's uit het eigen archief van Paulus Cleaning.
 * Elk paar toont dezelfde woning voor en na de behandeling.
 */
export const cases: Case[] = [
  {
    slug: "dak-landelijke-woning",
    service: "dakreiniging",
    title: "Pannendak onder een laag mos",
    caption: "Het volledige dakvlak zat onder het mos. Na de behandeling kwam de oorspronkelijke terracottakleur terug boven.",
    aspect: "4/3",
    tag: "Dakreiniging",
  },
  {
    slug: "dak-villa",
    service: "dakreiniging",
    title: "Villadak met groene aanslag",
    caption: "Mos in de overlappingen en groene aanslag over het hele vlak. Gereinigd en nabehandeld.",
    aspect: "4/3",
    tag: "Dakreiniging",
  },
  {
    slug: "dak-moderne-woning",
    service: "dakreiniging",
    title: "Dak met dakvlakramen",
    caption: "Dakvlakramen en de pannen errond vragen extra voorzichtigheid bij de aansluitingen.",
    aspect: "3/4",
    tag: "Dakreiniging",
  },
  {
    slug: "dak-bijgebouw",
    service: "dakreiniging",
    title: "Dak van een aanbouw met carport",
    caption: "Lager dak met veel bladval. Dak en onderliggende oprit in één beurt aangepakt.",
    aspect: "3/4",
    tag: "Dakreiniging",
  },
  {
    slug: "gevel-zijgevel",
    service: "gevelreiniging",
    title: "Zijgevel in rode baksteen",
    caption: "De doffe grijze film ging eraf, de rode gevelsteen kwam terug tevoorschijn.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-witte-gevel",
    service: "gevelreiniging",
    title: "Witte gevel met groene aanslag",
    caption: "Groene aanslag op de noordzijde. Gereinigd zonder het voegwerk aan te tasten.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-bakstenen-woning",
    service: "gevelreiniging",
    title: "Topgevel in gevelsteen",
    caption: "Jaren regenwater hadden de steen dof gemaakt. Na de stoomreiniging is het kleurverschil het duidelijkst bovenaan.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-crepi-baksteen",
    service: "gevelreiniging",
    title: "Gevel en terras in één beurt",
    caption: "Gevel, terrasklinkers en oprit samen aangepakt. Dat scheelt een tweede verplaatsing.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-rode-baksteen",
    service: "gevelreiniging",
    title: "Nieuwbouwgevel met bouwvuil",
    caption: "Cementsluier en bouwvuil na de ruwbouw. De omgeving werd afgeschermd voor we startten.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-garage",
    service: "gevelreiniging",
    title: "Garagegevel en toegang",
    caption: "Gevel en betonverharding ervoor samen gereinigd.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-bedrijfspand",
    service: "gevelreiniging",
    title: "Gevel van een bedrijfspand",
    caption: "Gereinigd buiten de openingsuren, zodat de toegang bruikbaar bleef.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-hoekwoning",
    service: "gevelreiniging",
    title: "Zijgevel met groenaanslag",
    caption: "Schaduwzijde tegen een haag. Precies daar zet groene aanslag zich het snelst vast.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "gevel-witte-woning",
    service: "gevelreiniging",
    title: "Geschilderde gevel en terras",
    caption: "Geschilderde gevel met lage druk behandeld, het terras in dezelfde beurt mee.",
    aspect: "3/4",
    tag: "Gevelreiniging",
  },
  {
    slug: "crepi-moderne-woning",
    service: "crepi-reinigen",
    title: "Crepi met grijze strepen",
    caption: "Regenstrepen en groene aanslag op sierpleister. Met softwash behandeld, zonder druk op de afwerklaag.",
    aspect: "3/4",
    tag: "Crepi",
  },
  {
    slug: "crepi-topgevel",
    service: "crepi-reinigen",
    title: "Topgevel in sierpleister",
    caption: "Hoge, volledig vlakke gevel waar elke streep opvalt. Volledig egaal teruggekregen.",
    aspect: "4/3",
    tag: "Crepi",
  },
  {
    slug: "crepi-langwerpige-woning",
    service: "crepi-reinigen",
    title: "Langgerekte gevel in crepi",
    caption: "Groot vlak in één behandeling, zodat er geen kleurverschil tussen stukken zit.",
    aspect: "4/3",
    tag: "Crepi",
  },
  {
    slug: "oprit-klinkers",
    service: "oprit-en-terras-reinigen",
    title: "Klinkeroprit onder een grijze film",
    caption: "Van egaal grijs terug naar de zandkleur van de klinker. Voegen nadien opnieuw ingezand.",
    aspect: "3/4",
    tag: "Oprit",
  },
  {
    slug: "terras-hardhout",
    service: "oprit-en-terras-reinigen",
    title: "Hardhouten terras met groene waas",
    caption: "Groen in de groeven en een grijze waas over de planken. De warme houtkleur kwam volledig terug.",
    aspect: "3/4",
    tag: "Terras",
  },
  {
    slug: "oprit-kasseien",
    service: "oprit-en-terras-reinigen",
    title: "Kasseioprit van een villa",
    caption: "Lange oprit in kasseien, over de volledige breedte gereinigd.",
    aspect: "4/3",
    tag: "Oprit",
  },
  {
    slug: "terras-zwembad",
    service: "oprit-en-terras-reinigen",
    title: "Houten terras rond een zwembad",
    caption: "Hout rond water blijft langer vochtig en vergroent sneller. Zonder chemie afgespoeld richting het bad.",
    aspect: "3/4",
    tag: "Terras",
  },
  {
    slug: "binnenkoer-tegels",
    service: "oprit-en-terras-reinigen",
    title: "Binnenkoer in grote tegels",
    caption: "Schaduwrijke binnenkoer met zwarte aanslag tussen de tegels.",
    aspect: "4/3",
    tag: "Terras",
  },
  {
    slug: "tuinpad-hout",
    service: "oprit-en-terras-reinigen",
    title: "Houten tuinpad naar de tuin",
    caption: "Smal pad dat glad werd bij regen. Na de beurt opnieuw veilig begaanbaar.",
    aspect: "3/4",
    tag: "Terras",
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
export const casesByService = (service: string) => cases.filter((c) => c.service === service);
