export type Section = { title: string; body: string[]; image?: string; alt?: string };
export type Faq = { q: string; a: string };
export type Step = { title: string; body: string };

export type Service = {
  slug: string;
  nav: string;
  card: string;
  cardSub: string;
  icon: "window" | "solar" | "facade" | "crepi" | "driveway" | "roof";
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  bullets: string[];
  sections: Section[];
  steps?: { title: string; items: Step[] };
  priceFactors: string[];
  caseSlugs: string[];
  gallery: string[];
  faq: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "dakreiniging",
    nav: "Dakreiniging",
    card: "Dakreiniging & ontmossen",
    cardSub: "Mos en algen weg, zonder uw pannen te beschadigen",
    icon: "roof",
    heroImage: "/img/hero/dak-hero1.webp",
    heroAlt: "Gereinigd pannendak van een woning in de Noorderkempen",
    metaTitle: "Dakreiniging & dak ontmossen in Brecht | Paulus Cleaning",
    metaDescription:
      "Dak laten reinigen of ontmossen in Brecht, Brasschaat, Wuustwezel en de Noorderkempen. Methode afgestemd op uw dakbedekking. Stuur foto's door voor een vaste prijs.",
    h1: "Uw dak weer de kleur van de dag dat het gelegd werd",
    lead: "Mos houdt regenwater vast op uw pannen en groeit tussen de overlappingen. Wij halen het eraf met een methode die bij úw dakbedekking past, en bekijken eerst of reiniging wel de juiste ingreep is.",
    bullets: [
      "Beoordeling van dakbedekking en staat vóór we starten",
      "Stoom, lage druk of voorbehandeling, afhankelijk van het materiaal",
      "Optioneel hydrofuge of dakcoating als nabehandeling",
      "Drone-inspectie bij grote of moeilijk bereikbare daken",
    ],
    sections: [
      {
        title: "Mos is geen schoonheidsprobleem alleen",
        body: [
          "Een mostapijt houdt vocht vast tegen uw pannen in plaats van het te laten weglopen. In de winter zet dat vocht uit bij vorst. Mos dat in de overlapping van de pannen groeit, duwt die stilaan uit elkaar.",
          "Daarbij komt het zichtbare: een dak vol groene en zwarte aanslag trekt de hele voorgevel naar beneden, hoe goed de rest ook onderhouden is.",
        ],
        image: "/img/content/dak-esthetiek.webp",
        alt: "Dak met mos en groene aanslag voor de reiniging",
      },
      {
        title: "Niet elk dak krijgt dezelfde behandeling",
        body: [
          "Keramische pannen, betonpannen, leien en golfplaten reageren elk anders. Een betonpan met een versleten toplaag verdraagt geen druk die een geglazuurde keramische pan niet voelt.",
          "Daarom kijken we eerst naar het materiaal, bestaande afwerklagen en de staat van de pannen. Pas daarna kiezen we druk, temperatuur en of er een voorbehandeling nodig is.",
        ],
        image: "/img/content/dak-opmaat.webp",
        alt: "Dakpannen van dichtbij tijdens de reiniging",
      },
      {
        title: "Wat we eerlijk zeggen vóór de werken",
        body: [
          "Dakreiniging is geen dakherstelling. Gebroken of verschoven pannen, een lekkende aansluiting of een versleten onderdak lossen we er niet mee op.",
          "Zien we zoiets bij de inspectie, dan melden we het vóór we beginnen. Dan weet u waar u aan toe bent en of reinigen op dat moment zinvol is.",
        ],
        image: "/img/content/dak-schade.webp",
        alt: "Inspectie van de dakbedekking voor de reiniging",
      },
      {
        title: "De nabehandeling bepaalt hoelang het mooi blijft",
        body: [
          "Na het reinigen bespreken we wat voor uw dak zinvol is. Een hydrofuge vermindert de wateropname van een geschikte, poreuze pan. Een dakcoating werkt anders en geeft ook een andere afwerking.",
          "Soms is geen van beide nodig en volstaat een periodieke onderhoudsbehandeling. We zeggen welke van de drie bij uw dak past, en waarom.",
        ],
        image: "/img/content/dak-levensduur.webp",
        alt: "Dak na reiniging en nabehandeling",
      },
    ],
    steps: {
      title: "Van eerste foto tot proper dak in vier stappen",
      items: [
        { title: "U stuurt een paar foto's door", body: "Via WhatsApp of het formulier. Een foto van het dak en uw adres volstaat om te starten." },
        { title: "Wij beoordelen het dak", body: "Op foto, ter plaatse of met een drone bij grote daken. We bekijken materiaal, vervuiling en bereikbaarheid." },
        { title: "U krijgt een vaste prijs", body: "Vrijblijvend, met de nabehandeling apart vermeld zodat u kunt kiezen." },
        { title: "Wij reinigen en ruimen op", body: "Mos en vuil gaan mee. U krijgt advies om het resultaat zo lang mogelijk te houden." },
      ],
    },
    priceFactors: [
      "De oppervlakte van het dak in m²",
      "Het type dakbedekking en de staat ervan",
      "Hoe zwaar de vervuiling is",
      "De bereikbaarheid en de hoogte",
      "Of u een hydrofuge of coating wenst",
    ],
    caseSlugs: ["dak-landelijke-woning", "dak-villa", "dak-moderne-woning", "dak-bijgebouw"],
    gallery: ["dak-07", "dak-08", "dak-11", "dak-02", "dak-06", "dak-04"],
    faq: [
      {
        q: "Wat kost het reinigen van mijn dak?",
        a: "Dat hangt af van de oppervlakte, het type pan, de vervuiling en de bereikbaarheid. Stuur een paar foto's en uw adres door en u krijgt een vaste prijs, vrijblijvend. Een prijs per m² noemen zonder uw dak gezien te hebben, zou een slag in de lucht zijn.",
      },
      {
        q: "Gebruiken jullie hogedruk op mijn pannen?",
        a: "Alleen waar de dakbedekking dat verdraagt. Bij betonpannen met een versleten toplaag of bij leien werken we met lagere druk, stoom of een voorbehandeling die het mos losmaakt. De methode volgt uit de inspectie, niet omgekeerd.",
      },
      {
        q: "Hoelang blijft mijn dak proper?",
        a: "Dat verschilt sterk. Een dak onder overhangende bomen op het noorden vergroent sneller dan een vrij dak op het zuiden. Met een passende nabehandeling en een controle om de paar jaar houdt u het resultaat het langst.",
      },
      {
        q: "Lost dakreiniging mijn lekkage op?",
        a: "Nee. Een lek komt van een beschadigde pan, een slechte aansluiting of een versleten onderdak. Dat moet hersteld worden. Zien we zoiets tijdens de inspectie, dan zeggen we het vóór we starten.",
      },
      {
        q: "Moet ik thuis zijn tijdens de werken?",
        a: "Meestal niet, zolang we aan water kunnen en de toegang vrij is. We spreken dat vooraf af.",
      },
    ],
    related: ["gevelreiniging", "oprit-en-terras-reinigen", "zonnepanelen-reinigen"],
  },
  {
    slug: "gevelreiniging",
    nav: "Gevelreiniging",
    card: "Gevelreiniging & impregnatie",
    cardSub: "Stoom of softwash, en hydrofuge waar het zin heeft",
    icon: "facade",
    heroImage: "/img/hero/gevel-hero1.webp",
    heroAlt: "Gereinigde bakstenen gevel van een woning in Brecht",
    metaTitle: "Gevelreiniging & gevel impregneren in Brecht | Paulus Cleaning",
    metaDescription:
      "Gevel laten reinigen of impregneren in Brecht, Brasschaat, Kalmthout en de Noorderkempen. Stoom of softwash, afgestemd op uw gevelsteen. Vraag een vaste prijs.",
    h1: "De kleur van uw gevelsteen zit er nog onder",
    lead: "Groene aanslag, uitslag en jaren regenwater maken van een warme gevelsteen een dof grijs vlak. Wij halen dat eraf met stoom of softwash, en kiezen pas na het bekijken van uw voegwerk welke van de twee het wordt.",
    bullets: [
      "Eerst de ondergrond, het voegwerk en bestaande coatings beoordelen",
      "Stoomreiniging of softwash onder lage druk",
      "Hydrofuge-behandeling waar de steen er geschikt voor is",
      "Particuliere woningen en bedrijfspanden",
    ],
    sections: [
      {
        title: "Waarom we niet met één techniek werken",
        body: [
          "Een harde gevelklinker verdraagt een aanpak die een zachte, poreuze steen of oud voegwerk niet overleeft. Daarom bekijken we eerst waar we mee te maken hebben.",
          "Bij een geschikte ondergrond maakt warm water het vuil los, zodat we met beperkte druk kunnen werken. Bij crepi en andere gevoelige afwerkingen gaan we naar softwash: lage druk en een afgestemd product dat de aanslag aanpakt.",
        ],
        image: "/img/content/gevel-maat.webp",
        alt: "Gevel tijdens de stoomreiniging",
      },
      {
        title: "Impregneren: alleen als uw gevel er klaar voor is",
        body: [
          "Een hydrofuge dringt in een poreuze ondergrond en vermindert hoeveel regenwater de steen opneemt. Dat werkt, maar enkel onder voorwaarden.",
          "De gevel moet voldoende droog zijn, losse of open voegen moeten eerst hersteld worden, en bestaande coatings kunnen het product tegenhouden. We controleren die drie punten vóór we een hydrofuge voorstellen.",
        ],
        image: "/img/content/gevel-water.webp",
        alt: "Waterdruppels op een geïmpregneerde gevel",
      },
      {
        title: "Wat impregneren wél en niet doet",
        body: [
          "Wél: minder wateropname door de gevelsteen, waardoor de gevel minder lang nat blijft na een regenbui en vuil zich minder makkelijk vasthecht.",
          "Niet: scheuren dichten, een lekkende dorpel herstellen of opstijgend vocht stoppen. Heeft u een vochtprobleem binnen, dan zoeken we eerst de oorzaak. Een hydrofuge over een onopgelost probleem is weggegooid geld.",
        ],
        image: "/img/content/gevel-levensduur.webp",
        alt: "Gevel na reiniging en impregnatie",
      },
      {
        title: "Ook op bedrijfspanden",
        body: [
          "Een kantoorgevel of bedrijfsgebouw is vaak groter maar zelden complexer. We stemmen de planning af op uw openingsuren en zorgen dat de toegang bruikbaar blijft tijdens de werken.",
        ],
        image: "/img/content/gevel-vuil.webp",
        alt: "Gereinigde gevel van een bedrijfspand",
      },
    ],
    priceFactors: [
      "Het gevelgevelvlak in m²",
      "De gevelsteen en de staat van het voegwerk",
      "Hoe zwaar en welk type vervuiling",
      "De bereikbaarheid en de hoogte",
      "Of u ook wil impregneren",
    ],
    caseSlugs: [
      "gevel-zijgevel",
      "gevel-witte-gevel",
      "gevel-bakstenen-woning",
      "gevel-crepi-baksteen",
      "gevel-rode-baksteen",
      "gevel-garage",
      "gevel-bedrijfspand",
      "gevel-hoekwoning",
      "gevel-witte-woning",
    ],
    gallery: ["gevel-19", "gevel-21", "gevel-20", "gevel-02", "gevel-12", "gevel-16"],
    faq: [
      {
        q: "Beschadigt gevelreiniging mijn voegwerk?",
        a: "Niet als de techniek klopt. Los of uitgespoeld voegwerk is wél een reden om niet zomaar te beginnen: daar moet eerst naar gekeken worden. We beoordelen het voegwerk tijdens de inspectie en zeggen het als er eerst hersteld moet worden.",
      },
      {
        q: "Wat kost gevelreiniging?",
        a: "De prijs hangt af van het geveloppervlak, de steen, de vervuiling, de bereikbaarheid en of u ook wil impregneren. Foto's en uw adres volstaan voor een vaste prijs op maat.",
      },
      {
        q: "Hoelang blijft een gereinigde gevel proper?",
        a: "Dat hangt vooral af van de oriëntatie en de omgeving. Een noordgevel onder bomen vergroent sneller dan een zuidgevel in open lucht. Een hydrofuge op een geschikte steen helpt het langer mooi te houden.",
      },
      {
        q: "Helpt gevelreiniging tegen vochtige muren binnen?",
        a: "Niet op zich. Vocht binnen heeft een oorzaak: een scheur, een lek, opstijgend vocht of condensatie. Reinigen en impregneren lossen dat niet op. We bekijken samen wat er aan de hand is voor u iets laat uitvoeren.",
      },
      {
        q: "Kan mijn crepi ook gereinigd worden?",
        a: "Ja, maar met softwash in plaats van stoom of druk. Daar hebben we een aparte pagina voor met de volledige uitleg.",
      },
    ],
    related: ["crepi-reinigen", "dakreiniging", "ramen-wassen"],
  },
  {
    slug: "crepi-reinigen",
    nav: "Crepi reinigen",
    card: "Crepi reinigen",
    cardSub: "Softwash voor sierpleister en gevoelige gevels",
    icon: "crepi",
    heroImage: "/img/hero/crepi-hero1.webp",
    heroAlt: "Witte crepigevel na een softwash-behandeling",
    metaTitle: "Crepi reinigen met softwash in Brecht | Paulus Cleaning",
    metaDescription:
      "Crepi of sierpleister laten reinigen in Brecht en de Noorderkempen. Softwash onder lage druk, zonder uw afwerklaag open te spuiten. Vraag een vaste prijs.",
    h1: "Crepi wordt proper zonder dat er een korrel afgaat",
    lead: "Sierpleister verdraagt geen hogedruk. Eén keer te hard spuiten en de afwerklaag is open. Met softwash werken we op lage druk en laat het product het werk doen.",
    bullets: [
      "Lage druk, nooit hogedruk op de afwerklaag",
      "Product en dosering afgestemd op uw pleister",
      "Groene aanslag, algen en organische vervuiling",
      "Omgeving en beplanting afgeschermd tijdens de behandeling",
    ],
    sections: [
      {
        title: "Wat softwash anders doet",
        body: [
          "Bij hogedruk doet de kracht van het water het werk. Bij softwash doet het product het, en spoelt het water alleen nog af. Dat verschil is precies waarom crepi het overleeft.",
          "We brengen een afgestemd reinigingsmiddel aan, laten het inwerken op de aanslag en spoelen daarna af met een druk die de korrel niet raakt.",
        ],
        image: "/img/content/crepi-soft.webp",
        alt: "Softwash-behandeling op een crepigevel",
      },
      {
        title: "Eerst kijken wat er onder de aanslag zit",
        body: [
          "Crepi dat al scheurtjes vertoont of waar de afwerking loskomt, vraagt eerst herstelling. Reinigen duwt water in die openingen en maakt het probleem groter in plaats van kleiner.",
          "Daarom beoordelen we de staat van de pleister vóór we iets aanbrengen. Is er iets aan de hand, dan hoort u het vooraf.",
        ],
        image: "/img/content/crepi-waarom.webp",
        alt: "Detail van een crepigevel voor de behandeling",
      },
      {
        title: "Ook voor andere gevoelige afwerkingen",
        body: [
          "Dezelfde aanpak gebruiken we voor sierpleister, gekaleide gevels en geschilderde bakstenen gevels waar druk de verflaag zou optillen.",
          "Twijfelt u welke afwerking u hebt? Stuur een foto van dichtbij door, dan zien we het meteen.",
        ],
      },
    ],
    priceFactors: [
      "Het geveloppervlak in m²",
      "Het type afwerking en de staat ervan",
      "De hoeveelheid groene aanslag",
      "De bereikbaarheid en de hoogte",
    ],
    caseSlugs: ["crepi-moderne-woning", "crepi-topgevel", "crepi-langwerpige-woning"],
    gallery: ["crepi-02", "crepi-03", "crepi-06"],
    faq: [
      {
        q: "Gaat mijn crepi stuk van het reinigen?",
        a: "Niet met softwash. Het risico zit in hogedruk: die slaat de korrel los en opent de afwerklaag. Daarom gebruiken we die hier niet.",
      },
      {
        q: "Is het product schadelijk voor mijn planten?",
        a: "We schermen beplanting en de directe omgeving af voor we starten en spoelen daarna na. Staat er iets kwetsbaars vlak tegen de gevel, zeg het dan op voorhand zodat we er rekening mee houden.",
      },
      {
        q: "Komt de groene aanslag terug?",
        a: "Op termijn wel, net als bij elke gevel. Hoe snel, hangt af van de ligging, de schaduw en hoe vochtig de muur blijft. Een gevel op het noorden onder bomen vraagt vaker een beurt dan een vrije zuidgevel.",
      },
      {
        q: "Wat als mijn crepi scheurtjes heeft?",
        a: "Dan herstellen we die eerst of raden we aan dat te laten doen. Water in een scheur reinigen maakt de schade erger. We zeggen het u na de inspectie.",
      },
    ],
    related: ["gevelreiniging", "dakreiniging", "oprit-en-terras-reinigen"],
  },
  {
    slug: "oprit-en-terras-reinigen",
    nav: "Oprit & terras",
    card: "Oprit- en terrasreiniging",
    cardSub: "Van grijze klinkers terug naar hun eigen kleur",
    icon: "driveway",
    heroImage: "/img/hero/oprit-hero1.webp",
    heroAlt: "Gereinigde klinkeroprit van een woning",
    metaTitle: "Oprit & terras reinigen in Brecht | Paulus Cleaning",
    metaDescription:
      "Oprit, terras of tuinpad laten reinigen in Brecht, Brasschaat en de Noorderkempen. Stoomreiniging en opnieuw inzanden met kwartszand. Vraag een vaste prijs.",
    h1: "Uw oprit is niet grijs, hij is vuil",
    lead: "Onder dat egale grijs zitten klinkers met een kleur. Met stoom halen we de film van mos, algen en ingelopen vuil eraf, en zanden we de voegen nadien opnieuw in.",
    bullets: [
      "Stoomreiniging, met temperatuur en druk op het materiaal afgestemd",
      "Klinkers, kasseien, natuursteen, beton, tegels en houten terrassen",
      "Voegen opnieuw inzanden met zand of kwartszand",
      "Ook parkings en bedrijfsterreinen",
    ],
    sections: [
      {
        title: "Een gladde oprit is meer dan lelijk",
        body: [
          "Mos en algen op klinkers maken het oppervlak glad zodra het regent. Op een hellende oprit of een trapje naar het terras is dat het soort probleem dat u één keer te laat opmerkt.",
          "De aanslag houdt bovendien vocht vast in de voegen, waardoor onkruid er makkelijker wortel schiet.",
        ],
        image: "/img/content/oprit-stoom.webp",
        alt: "Terras tijdens de stoomreiniging",
      },
      {
        title: "Stoom, en per ondergrond anders",
        body: [
          "Warm water maakt de aanslag los zodat we met beperkte druk kunnen werken. Een betonklinker verdraagt een andere aanpak dan blauwe hardsteen, keramische tegels of hardhout.",
          "Bij hardnekkige vlekken, cementsluier of olievlekken bekijken we eerst wat haalbaar is. Niet elke vlek gaat eruit, en dat zeggen we liever vooraf dan achteraf.",
        ],
      },
      {
        title: "Opnieuw inzanden hoort erbij",
        body: [
          "Reinigen spoelt onvermijdelijk voegzand uit. Blijven die voegen leeg, dan komen de klinkers los te liggen en groeit er sneller onkruid tussen.",
          "Daarom vullen we geschikte voegen nadien opnieuw op met zand of kwartszand. Dat staat apart op uw offerte zodat u ziet wat het kost.",
        ],
        image: "/img/content/oprit-service.webp",
        alt: "Voegen opnieuw inzanden na de reiniging",
      },
      {
        title: "Houten terrassen apart bekeken",
        body: [
          "Hardhout zoals ipé of bankirai krijgt een grijze waas en groen in de groeven. Met de juiste aanpak komt de oorspronkelijke kleur terug bovendrijven, zonder de vezel open te trekken.",
          "Kunststof vlonderplanken pakken we ook aan, met een lagere temperatuur.",
        ],
      },
    ],
    priceFactors: [
      "De oppervlakte in m²",
      "Het materiaal en de staat van de voegen",
      "Hoe zwaar de vervuiling is",
      "Of de voegen opnieuw ingezand moeten worden",
      "De bereikbaarheid met materiaal en water",
    ],
    caseSlugs: [
      "oprit-klinkers",
      "terras-hardhout",
      "oprit-kasseien",
      "terras-zwembad",
      "binnenkoer-tegels",
      "tuinpad-hout",
    ],
    gallery: ["oprit-01", "oprit-04", "oprit-05", "oprit-12", "oprit-17", "oprit-03"],
    faq: [
      {
        q: "Wat kost het reinigen van mijn oprit of terras?",
        a: "Dat hangt af van de oppervlakte, het materiaal, de vervuiling en of de voegen opnieuw ingezand moeten worden. Stuur enkele foto's en het aantal m² door als u het weet, dan krijgt u een vaste prijs.",
      },
      {
        q: "Komen alle vlekken eruit?",
        a: "Groene aanslag, mos en ingelopen vuil wel. Olievlekken, roestvlekken en cementsluier zijn apart: soms gaan ze eruit, soms gedeeltelijk. We zeggen op voorhand wat we verwachten in plaats van het te beloven.",
      },
      {
        q: "Moet ik na de reiniging opnieuw laten inzanden?",
        a: "Bij klinkers en kasseien: ja, zodra de voegen leeggespoeld zijn. Anders komen de stenen los en groeit er sneller onkruid. We nemen het als aparte lijn op in de offerte.",
      },
      {
        q: "Gebruiken jullie chemische producten op mijn terras?",
        a: "Bij stoomreiniging van steen is dat meestal niet nodig. Waar een behandeling wél aangewezen is, zeggen we welk product we gebruiken en houden we rekening met een vijver, zwembad of borders in de buurt.",
      },
      {
        q: "Reinigen jullie ook parkings en bedrijfsterreinen?",
        a: "Ja. We stemmen de planning af op uw werking zodat de toegang bruikbaar blijft.",
      },
    ],
    related: ["gevelreiniging", "dakreiniging", "ramen-wassen"],
  },
  {
    slug: "zonnepanelen-reinigen",
    nav: "Zonnepanelen",
    card: "Zonnepanelen reinigen",
    cardSub: "Osmosewater en zachte borstels, van 10 tot 1000 panelen",
    icon: "solar",
    heroImage: "/img/hero/zon-hero1.webp",
    heroAlt: "Gereinigde zonnepanelen op een bedrijfsdak",
    metaTitle: "Zonnepanelen reinigen in Brecht en omgeving | Paulus Cleaning",
    metaDescription:
      "Zonnepanelen laten reinigen in Brecht, Brasschaat en de Noorderkempen. Osmosewater, zachte borstels en drone-inspectie bij grote installaties. Vraag een offerte.",
    h1: "Stof en vogelpoep houden licht tegen. Meer niet, maar ook niet minder.",
    lead: "Wij reinigen zonnepanelen met gezuiverd osmosewater en zachte borstels, van een dak met tien panelen tot een loods met meer dan duizend. Wat het oplevert, hangt af van uw installatie, en daar zijn we eerlijk over.",
    bullets: [
      "Osmosewater: bijna geen mineralen, dus weinig kalkaanslag bij het opdrogen",
      "Zachte borstels op een telescoopsteel, ook bij moeilijk bereikbaar glas",
      "Drone-inspectie bij grote installaties",
      "Particuliere daken en industriële installaties",
    ],
    sections: [
      {
        title: "Eerst inspecteren, dan reinigen",
        body: [
          "Voor we iets aanraken, bekijken we de staat van de installatie. Dat kan ter plaatse, op basis van uw foto's, of met een drone als het om een groot dak gaat.",
          "Zo zien we meteen hoe zwaar de vervuiling is, of er beschadigde panelen tussen zitten en hoe we er veilig bij kunnen. Wat we opmerken, melden we voor we starten.",
        ],
        image: "/img/content/zon-werk.webp",
        alt: "Zonnepanelen worden gereinigd met een zachte borstel",
      },
      {
        title: "Waarom osmosewater",
        body: [
          "Gewoon leidingwater bevat kalk. Dat droogt op als een witte waas net op de plek waar u die het minst wil: het glas.",
          "Osmosewater is daarvan ontdaan. De borstel maakt het vuil los, het water spoelt het weg en het paneel droogt op zonder vlekken.",
        ],
      },
      {
        title: "Wat we niet beloven",
        body: [
          "U leest soms vaste percentages opbrengstwinst na een reiniging. Die cijfers kloppen zelden voor élke installatie.",
          "Hoeveel u merkt, hangt af van hoe vuil de panelen waren, de helling van het dak, de oriëntatie en de omgeving. Panelen onder bomen of naast een landbouwbedrijf vervuilen anders dan panelen in een open verkaveling. We geven u een eerlijke inschatting na de inspectie.",
        ],
      },
      {
        title: "Grote installaties",
        body: [
          "Loodsen, stallen en bedrijfsdaken met honderden panelen pakken we aan met aangepast materiaal en, waar nodig, een hoogtewerker.",
          "Bezorg ons het aantal panelen, het daktype en het adres, dan weten we meteen wat het wordt.",
        ],
      },
    ],
    priceFactors: [
      "Het aantal panelen",
      "Het daktype en de helling",
      "De bereikbaarheid, en of er een hoogtewerker nodig is",
      "Hoe zwaar de vervuiling is",
    ],
    caseSlugs: [],
    gallery: ["zon-01", "zon-02", "zon-11", "zon-13", "zon-14", "zon-05", "zon-08", "zon-10", "zon-12"],
    faq: [
      {
        q: "Hoe vaak moet ik mijn zonnepanelen laten reinigen?",
        a: "Dat hangt van de omgeving af. Panelen naast een drukke weg, een landbouwbedrijf of onder bomen vervuilen veel sneller dan panelen in een open verkaveling. In plaats van een vast interval te noemen, kijken we naar uw situatie.",
      },
      {
        q: "Hoeveel opbrengst win ik terug?",
        a: "Dat verschilt per installatie en wij beloven er geen percentage bij. Hoe zwaarder de vervuiling, hoe meer verschil u merkt. Na de inspectie geven we een eerlijke inschatting van wat reiniging in uw geval oplevert.",
      },
      {
        q: "Lopen jullie over mijn panelen?",
        a: "Nee. We werken met een telescoopsteel vanaf het dakvlak of vanop een hoogtewerker. Bij grote installaties brengen we de situatie eerst met een drone in kaart zodat niemand onnodig over het dak moet.",
      },
      {
        q: "Gebruiken jullie zeep of reinigingsmiddel?",
        a: "In de regel niet. Osmosewater en een zachte borstel volstaan voor stof, pollen en vogelpoep. Bij uitzonderlijke vervuiling bespreken we wat er nodig is.",
      },
    ],
    related: ["dakreiniging", "ramen-wassen", "gevelreiniging"],
  },
  {
    slug: "ramen-wassen",
    nav: "Ramen wassen",
    card: "Ramen wassen",
    cardSub: "Traditioneel of met osmose, eenmalig of periodiek",
    icon: "window",
    heroImage: "/img/hero/ramen-hero1.webp",
    heroAlt: "Ramenwasser aan het werk bij een woning in Brecht",
    metaTitle: "Ramenwasser in Brecht en de Noorderkempen | Paulus Cleaning",
    metaDescription:
      "Ramen laten wassen in Brecht, Brasschaat, Zoersel en omgeving. Traditioneel of met osmosewater, eenmalig of op vast interval. Particulier en bedrijf.",
    h1: "Glas waar u doorheen kijkt zonder het te zien",
    lead: "Traditioneel met inwasser en trekker, of met osmosewater op een telescoopsteel voor wat hoger zit. Eenmalig, of op een vast interval zodat u er niet meer aan hoeft te denken.",
    bullets: [
      "Raamkaders en dorpels worden meegenomen",
      "Osmosewater voor hoger of moeilijk bereikbaar glas",
      "Eenmalig of periodiek, in een vast ritme",
      "Woningen, kantoren, winkels en veranda's",
    ],
    sections: [
      {
        title: "Traditioneel waar het beter werkt",
        body: [
          "Met inwasser en trekker komt u aan het glas zelf, en aan de hoeken waar vuil blijft hangen. Raamkaders en dorpels nemen we mee, want een proper raam in een vuil kader oogt niet proper.",
          "Dit is de aanpak voor alles wat op normale hoogte zit en waar het resultaat tot in de hoek moet kloppen.",
        ],
        image: "/img/content/ramen-trad.webp",
        alt: "Traditioneel ramen wassen met inwasser en trekker",
      },
      {
        title: "Osmose voor wat hoger zit",
        body: [
          "Met gezuiverd osmosewater, een telescoopsteel en een zachte borstel raken we aan glas waar een ladder lastig of onveilig staat. Veranda's, hoge gevels, dakramen.",
          "Omdat het water nagenoeg geen mineralen bevat, droogt het glas op zonder kalkrand. Natrekken is niet nodig.",
        ],
        image: "/img/content/ramen-osmose.webp",
        alt: "Ramen wassen met osmosewater en telescoopsteel",
      },
      {
        title: "Periodiek, zodat u er geen omkijken naar heeft",
        body: [
          "Veel klanten kiezen voor een vast interval: vier keer per jaar, twee keer per jaar, of maandelijks bij een handelspand. U krijgt een vaste prijs per beurt en wij komen langs zonder dat u moet bellen.",
          "Dat werkt ook voor kantoren, winkels en praktijkruimtes.",
        ],
      },
    ],
    priceFactors: [
      "Het aantal ramen en de grootte",
      "De bereikbaarheid en de hoogte",
      "Of kaders en dorpels meegenomen worden",
      "Eenmalig of op een vast interval",
    ],
    caseSlugs: [],
    gallery: ["ramen-01", "ramen-04", "ramen-06", "ramen-14", "ramen-15", "ramen-08", "ramen-19", "ramen-20", "ramen-21"],
    faq: [
      {
        q: "Wat kost het laten wassen van mijn ramen?",
        a: "Dat hangt af van het aantal ramen, de bereikbaarheid en of u kaders en dorpels mee wil. Bij een periodieke beurt ligt de prijs per beurt lager dan bij een eenmalige. Stuur een paar foto's door voor een vaste prijs.",
      },
      {
        q: "Komen jullie ook op een vast interval?",
        a: "Ja. Vier keer per jaar, twee keer per jaar of maandelijks bij handelspanden. U spreekt het ritme af en wij komen langs zonder dat u telkens moet bellen.",
      },
      {
        q: "Moet ik thuis zijn?",
        a: "Voor de buitenkant meestal niet, zolang we aan de ramen kunnen. Voor de binnenkant uiteraard wel, of bij afspraak met een sleutel.",
      },
      {
        q: "Wassen jullie ook ramen van bedrijven?",
        a: "Ja. Kantoren, winkels, praktijken en bedrijfspanden, eenmalig of in onderhoud.",
      },
    ],
    related: ["zonnepanelen-reinigen", "gevelreiniging", "oprit-en-terras-reinigen"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
