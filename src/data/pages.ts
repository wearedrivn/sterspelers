import heroImage from '../assets/images/hero.webp';
import buitenspelenImage from '../assets/images/buitenspelen.webp';
import kinderbegeleidingImage from '../assets/images/kinderbegeleiding.webp';
import activiteitenImage from '../assets/images/activiteiten.webp';

// Inhoud van de losse SEO-pagina's (dienstpagina's en lokale pagina's).
// Alles wordt bij de build vooraf gerenderd naar statische HTML.

export interface ContentSubsection {
  heading: string;
  paragraphs: string[];
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: ContentSubsection[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface ContentPageData {
  path: string;
  /** Korte naam voor navigatie, breadcrumbs en interne links. */
  navLabel: string;
  /** Eén zin die in interne linkkaarten wordt getoond. */
  teaser: string;
  kind: 'service' | 'local';
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  faq: PageFaq[];
  service?: {
    name: string;
    serviceType: string;
    areaServed: string[];
  };
  related: string[];
  ctaTitle: string;
  ctaText: string;
}

export const CONTENT_PAGES: ContentPageData[] = [
  {
    path: '/pleincoach',
    navLabel: 'Pleincoach',
    teaser: 'Vaste, VOG-gescreende pleincoaches die het schoolplein tijdens de pauze in goede banen leiden.',
    kind: 'service',
    title: 'Pleincoach inhuren voor je basisschool | Sterspelers',
    description:
      'Een vaste, VOG-gescreende pleincoach voor je basisschool in Zaanstad of Amsterdam. Rust en beweging op het plein, ontlasting voor leerkrachten. Plan een kennismaking.',
    eyebrow: 'Pleincoaches basisschool',
    h1: 'Een vaste pleincoach voor basisscholen',
    intro: [
      'Een pleincoach van Sterspelers zorgt ervoor dat de pauze weer een pauze is: voor de kinderen én voor je leerkrachten. Onze pleincoaches zijn VOG-gescreend, getraind via de Sterspelers Academie en komen elke week opnieuw naar dezelfde school.',
      'Wil je een pleincoach inhuren voor je basisschool in Zaanstad of Amsterdam? Hieronder lees je wat een pleincoach doet, hoe we werken en hoe je start.',
    ],
    image: buitenspelenImage,
    imageAlt: 'Pleincoach van Sterspelers begeleidt een balspel met kinderen op het schoolplein van een basisschool',
    sections: [
      {
        heading: 'Wat doet een pleincoach?',
        paragraphs: [
          'Een pleincoach is een vaste begeleider op het schoolplein tijdens de pauzes. Hij of zij houdt overzicht, zet spelvormen op, helpt kinderen die nergens aansluiting vinden en grijpt in als een spel uit de hand loopt. Het verschil met een pleinwacht is dat een pleincoach niet alleen toezicht houdt, maar het spel actief begeleidt.',
          'Onze pleincoaches werken met duidelijke spelzones op het plein, zodat drukke balspellen, rustige spellen en vrij spelen elkaar niet in de weg zitten. Kinderen weten waar ze terechtkunnen en wat de afspraken zijn. Dat geeft houvast, zeker voor kinderen die het plein spannend vinden.',
          'Daarbij werken we met het spelmateriaal dat je school al heeft. Is dat beperkt of aan vervanging toe? Dan kun je via Sterspelers schoolpleinmateriaal aanschaffen, afgestemd op je plein en de leeftijd van de kinderen.',
        ],
      },
      {
        heading: 'Waarom basisscholen kiezen voor pleincoaches',
        paragraphs: [
          'Op veel basisscholen draaien leerkrachten pleindienst naast een vol lesrooster. Dat kost tijd en energie, en de leerkracht staat na de pauze meteen weer voor de klas. Door de pleindienst over te dragen aan een vaste pleincoach krijgen leerkrachten hun pauze terug. Dat is een concrete stap om de werkdruk te verlagen.',
        ],
        bullets: [
          'Leerkrachten hebben echt pauze en kunnen even opladen of de volgende les voorbereiden.',
          'Kinderen zien elke week dezelfde, vertrouwde gezichten op het plein.',
          'Conflicten worden op het plein opgepakt en niet mee de klas in genomen.',
          'Kinderen bewegen meer doordat er altijd een uitnodigend spel klaarstaat.',
        ],
      },
      {
        heading: 'Zo werken onze pleincoaches',
        paragraphs: [
          'Iedere school is anders. Daarom beginnen we altijd met een kennismaking op locatie: we kijken naar je plein, de pauzetijden, het aantal leerlingen en de afspraken die je school al heeft. Daarna stellen we een vast team samen dat past bij jullie school.',
        ],
        subsections: [
          {
            heading: 'Vaste begeleiders en één aanspreekpunt',
            paragraphs: [
              'Je school krijgt vaste pleincoaches en een vaste coördinator als aanspreekpunt. Zo bouwen de begeleiders een band op met de kinderen en het team, en hoef jij niet elke week opnieuw uit te leggen hoe het werkt.',
            ],
          },
          {
            heading: 'Jullie regels zijn onze regels',
            paragraphs: [
              'We nemen de huisregels, de aanpak bij conflicten en de kernwaarden van je school over. Onze pleincoaches handelen hetzelfde als het team, zodat kinderen één lijn ervaren.',
            ],
          },
          {
            heading: 'Veilig en goed opgeleid',
            paragraphs: [
              'Alle pleincoaches hebben een geldige VOG en volgen trainingen aan de Sterspelers Academie, waar we werken aan spelbegeleiding, positieve benadering en omgaan met lastige situaties.',
            ],
          },
        ],
      },
      {
        heading: 'Altijd bezetting, ook bij ziekte',
        paragraphs: [
          'Een pleincoach heeft alleen waarde als hij er ook echt staat. Valt een vaste begeleider onverwacht uit, dan staat er binnen 60 minuten een vervangende Sterspeler op je school. Jij hoeft daar niets voor te regelen: geen roosters puzzelen, geen leerkracht die alsnog het plein op moet.',
        ],
      },
    ],
    faq: [
      {
        question: 'Wat kost een pleincoach voor een basisschool?',
        answer:
          'Dat hangt af van het aantal leerlingen, het aantal pauzes per dag en het aantal dagen per week. Na een kennismaking maken we een voorstel op maat. Met de rekentool op onze homepage zie je alvast hoeveel begeleiders we adviseren.',
      },
      {
        question: 'Hoeveel pleincoaches heeft mijn school nodig?',
        answer:
          'Dat bepalen we samen op basis van het aantal kinderen dat tegelijk buiten is, de grootte en indeling van het plein en eventuele aandachtspunten. We adviseren altijd minimaal twee begeleiders per pauzemoment.',
      },
      {
        question: 'Zijn de pleincoaches gescreend?',
        answer:
          'Ja. Elke pleincoach heeft een geldige Verklaring Omtrent het Gedrag (VOG) en volgt trainingen aan de Sterspelers Academie.',
      },
      {
        question: 'Wat gebeurt er als een pleincoach ziek is?',
        answer:
          'Dan staat er binnen 60 minuten een vervangende Sterspeler op je school. Je hoeft zelf geen vervanging te regelen.',
      },
      {
        question: 'Hoe snel kan een pleincoach starten?',
        answer:
          'Na de kennismaking en jouw akkoord op het voorstel stellen we het vaste team voor en plannen we een proefdag. In de praktijk kan dat binnen enkele weken.',
      },
    ],
    service: {
      name: 'Pleincoach voor basisscholen',
      serviceType: 'Pleincoach / pauzebegeleiding op het schoolplein',
      areaServed: ['Zaanstad', 'Amsterdam'],
    },
    related: ['/pauzebegeleiding', '/tso-overblijf', '/zaanstad', '/amsterdam'],
    ctaTitle: 'Benieuwd wat een pleincoach voor jouw school kan betekenen?',
    ctaText:
      'Plan een gratis kennismaking. We komen langs, kijken naar je plein en pauzes en maken een voorstel dat past bij jullie school.',
  },
  {
    path: '/pauzebegeleiding',
    navLabel: 'Pauzebegeleiding',
    teaser: 'Pleindienst uitbesteden aan vaste begeleiders, zodat leerkrachten echt pauze hebben.',
    kind: 'service',
    title: 'Pauzebegeleiding voor scholen: pleindienst uitbesteden | Sterspelers',
    description:
      'Pauzebegeleiding op school uitbesteden? Sterspelers neemt de pleindienst over met vaste, VOG-gescreende begeleiders in Zaanstad en Amsterdam. Leerkrachten krijgen hun pauze terug.',
    eyebrow: 'Pauzebegeleiding school',
    h1: 'Pauzebegeleiding op school: pleindienst uitbesteden',
    intro: [
      'De pleindienst is op veel basisscholen een taak die erbij komt. Leerkrachten lopen een half uur buiten rond en staan daarna direct weer voor de groep. Met pauzebegeleiding van Sterspelers besteed je de pleindienst uit aan vaste, VOG-gescreende begeleiders.',
      'Zo houden kinderen een veilige en actieve pauze, en krijgt je team de rust die het nodig heeft.',
    ],
    image: kinderbegeleidingImage,
    imageAlt: 'Begeleider van Sterspelers houdt toezicht en speelt mee met kinderen tijdens de pauze',
    sections: [
      {
        heading: 'Meer dan een pleinwacht inhuren',
        paragraphs: [
          'Veel scholen zoeken in eerste instantie een pleinwacht: iemand die toezicht houdt zodat er een volwassene op het plein staat. Onze begeleiders doen dat, maar ook meer. Ze kennen de kinderen bij naam, zetten spelletjes op, helpen bij het oplossen van ruzies en letten op kinderen die alleen staan.',
          'Dat verschil merk je in de klas. Een pauze met structuur en aandacht zorgt ervoor dat kinderen met een rustiger hoofd terugkomen. Een conflict dat op het plein goed is afgehandeld, hoeft niet na de pauze in de klas opgelost te worden.',
        ],
      },
      {
        heading: 'Wat levert het je team op?',
        paragraphs: [
          'Werkdruk in het onderwijs is een bekend probleem. De pleindienst is een van de taken die je relatief eenvoudig kunt overdragen, zonder dat het onderwijs eronder lijdt. Wanneer je de pleindienst uitbesteedt, kunnen leerkrachten:',
        ],
        bullets: [
          'hun eigen pauze nemen, zonder onderbreking;',
          'tijd besteden aan voorbereiding, overleg of kort contact met collega’s;',
          'na de pauze uitgerust aan de volgende les beginnen;',
          'erop vertrouwen dat het plein in handen is van vaste, bekende begeleiders.',
        ],
      },
      {
        heading: 'Hoe we de pauzebegeleiding inrichten',
        paragraphs: [
          'We beginnen met een kennismaking op school. Samen met de directie bespreken we de pauzetijden, het aantal groepen dat tegelijk buiten is, de indeling van het plein en de afspraken die er al zijn. Op basis daarvan maken we een voorstel met het aantal begeleiders en de inzet per dag.',
          'Daarna stellen we het vaste team aan je voor. Tijdens een proefdag maken de begeleiders kennis met de kinderen en het team. We stemmen de huisregels af, zodat begeleiders en leerkrachten dezelfde taal spreken. Je krijgt één vaste coördinator als aanspreekpunt voor vragen, wensen en evaluaties.',
        ],
      },
      {
        heading: 'Betrouwbaar, ook als het tegenzit',
        paragraphs: [
          'Pauzebegeleiding uitbesteden werkt alleen als je erop kunt rekenen. Alle begeleiders hebben een geldige VOG en volgen trainingen aan de Sterspelers Academie. En valt een begeleider uit, dan staat er binnen 60 minuten vervanging op locatie. Er hoeft dus nooit alsnog een leerkracht naar buiten.',
          'Omdat de begeleiders via Sterspelers werken, heb je als school geen werkgeversrisico en geen planningszorgen. Wij regelen roosters, vervanging en kwaliteit; jij houdt het overzicht via vaste evaluatiemomenten.',
        ],
      },
    ],
    faq: [
      {
        question: 'Wat is het verschil tussen een pleinwacht en pauzebegeleiding?',
        answer:
          'Een pleinwacht houdt vooral toezicht. Bij pauzebegeleiding van Sterspelers begeleiden vaste begeleiders ook actief het spel, helpen ze bij conflicten en letten ze op kinderen die alleen staan.',
      },
      {
        question: 'Kunnen we alleen de pleindienst uitbesteden en de lunch zelf doen?',
        answer:
          'Ja. Je kiest zelf welke momenten we overnemen: alleen de ochtendpauze, alleen het buitenspelen na de lunch, of de hele middagpauze inclusief het eten. Zie ook onze pagina over TSO en overblijf.',
      },
      {
        question: 'Hoe stemmen jullie af met onze schoolregels?',
        answer:
          'Bij de start nemen we de huisregels, de aanpak bij conflicten en de kernwaarden van de school door. Onze begeleiders werken daar vervolgens mee, zodat kinderen één lijn ervaren.',
      },
      {
        question: 'Wie is ons aanspreekpunt?',
        answer:
          'Je school krijgt een vaste coördinator van Sterspelers. Die is bereikbaar voor vragen en plant periodiek een evaluatie met de directie.',
      },
      {
        question: 'Wat als een begeleider ziek is?',
        answer: 'Dan zorgen wij binnen 60 minuten voor een vervangende begeleider op je school.',
      },
    ],
    service: {
      name: 'Pauzebegeleiding en pleindienst',
      serviceType: 'Pauzebegeleiding / pleindienst uitbesteden',
      areaServed: ['Zaanstad', 'Amsterdam'],
    },
    related: ['/pleincoach', '/tso-overblijf', '/rijke-schooldag', '/zaanstad'],
    ctaTitle: 'Pleindienst uitbesteden? Laten we kennismaken.',
    ctaText:
      'In een vrijblijvend gesprek op school bekijken we samen welke pauzes we kunnen overnemen en wat dat je team oplevert.',
  },
  {
    path: '/tso-overblijf',
    navLabel: 'TSO & overblijf',
    teaser: 'Overblijfkrachten voor de tussenschoolse opvang: vaste gezichten tijdens lunch en buitenspelen.',
    kind: 'service',
    title: 'TSO uitbesteden: overblijfkrachten voor je basisschool | Sterspelers',
    description:
      'Tussenschoolse opvang (TSO) uitbesteden aan Sterspelers: vaste, VOG-gescreende overblijfkrachten voor lunch en buitenspelen op basisscholen in Zaanstad en Amsterdam.',
    eyebrow: 'Tussenschoolse opvang',
    h1: 'TSO uitbesteden: vaste overblijfkrachten voor je basisschool',
    intro: [
      'De tussenschoolse opvang (TSO) is voor veel basisscholen een lastig onderdeel van de dag. Overblijfkrachten zijn moeilijk te vinden, vrijwilligers haken af en bij uitval springt een leerkracht bij. Sterspelers neemt de uitvoering van de TSO over met vaste, VOG-gescreende begeleiders.',
      'Jij houdt de regie als school, wij zorgen dat er elke dag een betrouwbaar team klaarstaat.',
    ],
    image: kinderbegeleidingImage,
    imageAlt: 'Overblijfkracht van Sterspelers met een groep kinderen tijdens de tussenschoolse opvang',
    sections: [
      {
        heading: 'Wat houdt TSO uitbesteden in?',
        paragraphs: [
          'Bij tussenschoolse opvang gaat het om de begeleiding van kinderen tijdens de middagpauze: samen eten en daarna buiten spelen. De school blijft verantwoordelijk voor de TSO, maar de uitvoering kun je uitbesteden. Sterspelers levert dan de overblijfkrachten die de lunch en het buitenspelen begeleiden.',
          'We sluiten aan bij hoe jullie de middagpauze nu hebben georganiseerd: eten in de klas of in een aparte ruimte, een continurooster of een langere middagpauze. Jullie geven aan welke momenten we overnemen; wij zorgen voor de mensen en de planning.',
        ],
      },
      {
        heading: 'Waarom scholen de TSO uitbesteden',
        paragraphs: [
          'Een goed draaiende TSO vraagt veel organisatie: overblijfkrachten werven, inroosteren, inwerken, vervanging regelen en de kwaliteit bewaken. Die taken komen vaak bij de directie of een leerkracht terecht. Door de TSO uit te besteden verdwijnt dat werk van je bureau.',
        ],
        bullets: [
          'Geen werving en roostering van overblijfkrachten meer.',
          'Vaste overblijfkrachten die de kinderen kennen.',
          'Vervanging binnen 60 minuten bij ziekte of uitval.',
          'Leerkrachten hoeven niet in te springen tijdens hun eigen pauze.',
        ],
      },
      {
        heading: 'Onze overblijfkrachten',
        paragraphs: [
          'Een overblijfkracht van Sterspelers is geen losse invaller, maar een vaste begeleider die elke week op dezelfde school staat. Kinderen en ouders weten wie er tijdens de lunch is. Dat maakt de overgang van klas naar pauze en terug een stuk rustiger.',
        ],
        subsections: [
          {
            heading: 'Gescreend en getraind',
            paragraphs: [
              'Al onze overblijfkrachten hebben een geldige VOG en volgen trainingen aan de Sterspelers Academie, onder meer in spelbegeleiding en een positieve, duidelijke benadering van kinderen.',
            ],
          },
          {
            heading: 'Rustige lunch, actieve pauze',
            paragraphs: [
              'Tijdens het eten zorgen de begeleiders voor rust en een prettige sfeer. Daarna gaan ze mee naar buiten en begeleiden ze het spel op het plein, net als onze pleincoaches. Zo is de hele middagpauze in één hand.',
            ],
          },
        ],
      },
      {
        heading: 'Communicatie met school en ouders',
        paragraphs: [
          'Bijzonderheden tijdens de middagpauze bespreken onze begeleiders met de groepsleerkracht, die dit waar nodig terugkoppelt aan ouders. Zo blijft de school het vaste aanspreekpunt voor ouders en ontstaan er geen dubbele lijnen. Met de directie evalueren we periodiek hoe het gaat en wat er beter kan.',
          'Wil je weten hoeveel overblijfkrachten jouw school nodig heeft? Op onze homepage staat een rekentool die op basis van het aantal leerlingen een eerste advies geeft. In de kennismaking maken we dat concreet voor jullie situatie.',
        ],
      },
    ],
    faq: [
      {
        question: 'Blijft de school verantwoordelijk voor de TSO?',
        answer:
          'Ja. De school blijft verantwoordelijk voor de tussenschoolse opvang. Sterspelers neemt de uitvoering over: wij leveren de overblijfkrachten en regelen planning en vervanging.',
      },
      {
        question: 'Kunnen jullie ook alleen het buitenspelen na de lunch begeleiden?',
        answer:
          'Ja. Je kiest zelf of we de hele middagpauze overnemen of alleen een deel. Lees ook onze pagina over pauzebegeleiding.',
      },
      {
        question: 'Hoe worden ouders geïnformeerd?',
        answer:
          'Bijzonderheden bespreken onze begeleiders met de groepsleerkracht. De school houdt zo het contact met ouders in eigen hand.',
      },
      {
        question: 'Zijn de overblijfkrachten altijd dezelfde?',
        answer:
          'Ja, we werken met vaste begeleiders per school. Alleen bij ziekte of uitval komt er een vervanger, binnen 60 minuten.',
      },
      {
        question: 'Werkt dit ook bij een continurooster?',
        answer:
          'Ja. We stemmen de inzet af op jullie rooster, of de kinderen nu in de klas eten met een korte pauze of een langere middagpauze hebben.',
      },
    ],
    service: {
      name: 'TSO en overblijf uitbesteden',
      serviceType: 'Tussenschoolse opvang / overblijfkrachten',
      areaServed: ['Zaanstad', 'Amsterdam'],
    },
    related: ['/pauzebegeleiding', '/pleincoach', '/amsterdam', '/zaanstad'],
    ctaTitle: 'De TSO uit handen geven?',
    ctaText:
      'Vertel ons hoe de middagpauze op jullie school nu loopt. We denken mee en maken een voorstel voor vaste overblijfkrachten.',
  },
  {
    path: '/rijke-schooldag',
    navLabel: 'Rijke Schooldag',
    teaser: 'Sportclinics en naschoolse activiteiten die passen in een Rijke Schooldag-programma.',
    kind: 'service',
    title: 'Rijke Schooldag: sportclinics en naschoolse activiteiten | Sterspelers',
    description:
      'Sterspelers verzorgt sportclinics en naschoolse activiteiten voor basisscholen en gemeenten in Zaanstad en Amsterdam, als onderdeel van de Rijke Schooldag. Vaste, VOG-gescreende trainers.',
    eyebrow: 'Rijke Schooldag aanbieder',
    h1: 'Sportclinics en naschoolse activiteiten voor de Rijke Schooldag',
    intro: [
      'Steeds meer basisscholen bieden kinderen een Rijke Schooldag: een dag waarin naast lessen ook ruimte is voor sport, beweging, cultuur en ontmoeting. Sterspelers verzorgt sportclinics en naschoolse activiteiten die daarin passen.',
      'Onze trainers zijn VOG-gescreend en getraind via de Sterspelers Academie, en we stemmen het programma af op de doelen van je school of gemeente.',
    ],
    image: activiteitenImage,
    imageAlt: 'Kinderen doen mee aan een sportclinic van Sterspelers als onderdeel van de Rijke Schooldag',
    sections: [
      {
        heading: 'Wat is de Rijke Schooldag?',
        paragraphs: [
          'Met een Rijke Schooldag krijgen kinderen naast het reguliere onderwijs extra activiteiten op het gebied van sport, cultuur en talentontwikkeling. Het idee is dat alle kinderen kansen krijgen om nieuwe dingen te ontdekken, ook als ze thuis minder mogelijkheden hebben. Scholen werken daarvoor vaak samen met externe aanbieders, soms met ondersteuning van de gemeente.',
          'De precieze invulling en financiering verschillen per gemeente en per school. Wij sluiten aan bij de afspraken die er al zijn en denken mee over een programma dat bij jullie past.',
        ],
      },
      {
        heading: 'Ons aanbod voor basisscholen',
        paragraphs: [
          'We verzorgen activiteiten tijdens en na schooltijd. Dat kan een losse clinic zijn, een reeks lessen over meerdere weken of een vast naschools aanbod.',
        ],
        bullets: [
          'Sportclinics in onder meer balvaardigheid, atletiek, dans en freerun.',
          'Naschoolse activiteiten in blokken van meerdere weken.',
          'Bewegingsactiviteiten tijdens themaweken of sportdagen.',
          'Een programma op maat dat aansluit bij de doelen van de school of gemeente.',
        ],
      },
      {
        heading: 'Hoe we een programma opzetten',
        paragraphs: [
          'We beginnen met een gesprek over je doelen: wil je kinderen meer laten bewegen, nieuwe sporten laten ontdekken, of juist werken aan samenwerken en zelfvertrouwen? Daarna stellen we een programma voor met vaste trainers, een planning en de benodigde materialen.',
          'Onze trainers werken met het sport- en spelmateriaal van de school. Is dat er nog niet of onvoldoende, dan kan de school via Sterspelers geschikt materiaal aanschaffen. De trainers werken met kleine, haalbare doelen per les, zodat ieder kind kan meedoen, ongeacht het niveau. Plezier staat voorop: een kind dat met een goed gevoel naar huis gaat, komt de volgende keer terug.',
        ],
        subsections: [
          {
            heading: 'Voor scholen',
            paragraphs: [
              'Voor scholen nemen we de organisatie van de activiteit volledig over. Je hoeft geen trainers te zoeken. Je leerkrachten worden niet extra belast.',
            ],
          },
          {
            heading: 'Voor gemeenten en schoolbesturen',
            paragraphs: [
              'Wil je als gemeente of bestuur een aanbod op meerdere scholen neerzetten? Dan stemmen we de inzet per school af en houden we één aanspreekpunt voor het geheel.',
            ],
          },
        ],
      },
      {
        heading: 'Veilig en betrouwbaar',
        paragraphs: [
          'Ook bij naschoolse activiteiten werken we met vaste begeleiders. Iedere trainer heeft een geldige VOG en volgt trainingen aan de Sterspelers Academie. Valt een trainer uit, dan zorgen we binnen 60 minuten voor vervanging.',
          'Combineer je de activiteiten met onze pleincoaches of pauzebegeleiding? Dan zien kinderen dezelfde vertrouwde gezichten op het plein en bij de clinics. Dat maakt de drempel om mee te doen lager, zeker voor kinderen die nieuwe activiteiten spannend vinden.',
        ],
      },
    ],
    faq: [
      {
        question: 'Zijn jullie een aanbieder voor de Rijke Schooldag?',
        answer:
          'Ja, we verzorgen sportclinics en naschoolse activiteiten die scholen kunnen inzetten binnen hun Rijke Schooldag-programma. De voorwaarden en financiering verschillen per gemeente; we denken graag mee.',
      },
      {
        question: 'Welke sporten bieden jullie aan?',
        answer:
          'Onder meer balvaardigheid, atletiek, dans en freerun. We stemmen het aanbod af op de leeftijd van de kinderen en de wensen van de school.',
      },
      {
        question: 'Vinden de activiteiten tijdens of na schooltijd plaats?',
        answer:
          'Allebei is mogelijk. We verzorgen clinics tijdens schooltijd, bijvoorbeeld tijdens een themaweek, en naschoolse activiteiten in blokken van meerdere weken.',
      },
      {
        question: 'Nemen jullie zelf sport- en spelmateriaal mee?',
        answer:
          'Nee, we werken met het materiaal van de school. Heeft je school nog niet het juiste materiaal, dan kun je via Sterspelers schoolpleinmateriaal aanschaffen. We adviseren je graag over wat past bij de activiteiten.',
      },
      {
        question: 'Kunnen jullie op meerdere scholen tegelijk werken?',
        answer:
          'Ja. Voor gemeenten en schoolbesturen stemmen we de inzet per school af, met één vast aanspreekpunt.',
      },
    ],
    service: {
      name: 'Sportclinics en naschoolse activiteiten (Rijke Schooldag)',
      serviceType: 'Sportclinics / naschoolse activiteiten basisschool',
      areaServed: ['Zaanstad', 'Amsterdam'],
    },
    related: ['/pleincoach', '/pauzebegeleiding', '/amsterdam', '/zaanstad'],
    ctaTitle: 'Een Rijke Schooldag-programma samenstellen?',
    ctaText:
      'Vertel ons wat je wilt bereiken. We stellen een programma voor met vaste trainers dat past bij je school of gemeente.',
  },
  {
    path: '/zaanstad',
    navLabel: 'Pleincoach Zaanstad',
    teaser: 'Pleincoaches en pauzebegeleiding voor basisscholen in Zaandam en de rest van Zaanstad.',
    kind: 'local',
    title: 'Pleincoach Zaanstad en Zaandam | Pauzebegeleiding | Sterspelers',
    description:
      'Pleincoaches en pauzebegeleiding voor basisscholen in Zaanstad: Zaandam, Koog aan de Zaan, Wormerveer, Krommenie en Assendelft. Vaste, VOG-gescreende begeleiders.',
    eyebrow: 'Basisscholen in Zaanstad',
    h1: 'Pleincoach en pauzebegeleiding in Zaanstad',
    intro: [
      'Sterspelers levert vaste, VOG-gescreende pleincoaches aan basisscholen in heel Zaanstad: van Zaandam tot Krommenie en van Assendelft tot Wormerveer. Je bereikt ons op ons Zaanse nummer, 075 234 0345.',
      'We zijn op zoek naar onze eerste partnerscholen in de regio en komen graag kennismaken.',
    ],
    image: heroImage,
    imageAlt: 'Kinderen spelen buiten op het schoolplein onder begeleiding van een pleincoach van Sterspelers in Zaanstad',
    sections: [
      {
        heading: 'Pleincoaches voor scholen in Zaandam en omgeving',
        paragraphs: [
          'Of je school nu in Zaandam, Koog aan de Zaan, Zaandijk, Wormerveer, Krommenie, Assendelft of Westzaan staat: onze pleincoaches komen naar je toe. Zaanstad is samen met Amsterdam ons werkgebied, zodat we snel kunnen schakelen als er onverwacht iets verandert in het rooster.',
          'Een pleincoach begeleidt het spel tijdens de pauze, houdt overzicht op het plein en helpt kinderen die het lastig vinden om aansluiting te vinden. Zo blijft de pauze veilig en actief, en hoeven leerkrachten niet zelf de pleindienst te draaien.',
        ],
      },
      {
        heading: 'Pauzebegeleiding in Zaanstad: wat we doen',
        paragraphs: [
          'Je kiest zelf welke momenten we overnemen. Veel scholen beginnen met de pleindienst tijdens de ochtend- of middagpauze; andere scholen geven ook de lunch en het overblijven uit handen.',
        ],
        bullets: [
          'Pleincoaches tijdens de ochtend- en middagpauze.',
          'Pauzebegeleiding en pleindienst, zodat leerkrachten echt pauze hebben.',
          'Overblijfkrachten voor de tussenschoolse opvang (TSO).',
          'Sportclinics en naschoolse activiteiten, bijvoorbeeld voor de Rijke Schooldag.',
        ],
      },
      {
        heading: 'Hoe we werken met Zaanse scholen',
        paragraphs: [
          'We beginnen met een kennismaking op je school. We kijken naar het plein, de pauzetijden en het aantal leerlingen, en bespreken wat er nu goed gaat en wat beter kan. Daarna krijg je een voorstel op maat.',
          'Na jouw akkoord stellen we een vast team voor en plannen we een proefdag. We nemen de huisregels van je school over, zodat begeleiders en leerkrachten dezelfde lijn volgen. Je krijgt een vaste coördinator als aanspreekpunt, die ook periodiek met je evalueert.',
        ],
      },
      {
        heading: 'Voor schoolbesturen in de Zaanstreek',
        paragraphs: [
          'Ben je verbonden aan een schoolbestuur met meerdere scholen in Zaanstad? Dan kunnen we de pauzebegeleiding op meerdere locaties tegelijk verzorgen. Iedere school krijgt een eigen vast team dat de kinderen en het team kent, terwijl het bestuur één aanspreekpunt heeft voor planning, afspraken en evaluaties.',
          'Zo ontstaat op alle scholen dezelfde kwaliteit, zonder dat iedere directeur zelf begeleiders hoeft te werven, in te roosteren of vervanging te regelen. Dat scheelt tijd op de scholen én op het bestuursbureau.',
        ],
      },
      {
        heading: 'Veilig, vast en betrouwbaar',
        paragraphs: [
          'Al onze begeleiders hebben een geldige VOG en volgen trainingen aan de Sterspelers Academie. Kinderen zien elke week dezelfde gezichten. Valt een begeleider uit, dan staat er binnen 60 minuten een vervanger op je school. Je hoeft zelf niets te regelen.',
          'Je bereikt ons direct op 075 234 0345 of via info@sterspelers.nl.',
        ],
      },
    ],
    faq: [
      {
        question: 'In welke plaatsen in Zaanstad werken jullie?',
        answer:
          'In heel de gemeente Zaanstad, waaronder Zaandam, Koog aan de Zaan, Zaandijk, Wormerveer, Krommenie, Assendelft en Westzaan.',
      },
      {
        question: 'Werken jullie al met scholen in Zaanstad?',
        answer:
          'We zijn op dit moment op zoek naar onze eerste partnerscholen in Zaanstad en Amsterdam. Juist daarom maken we graag tijd voor een uitgebreide kennismaking.',
      },
      {
        question: 'Hoe snel kunnen jullie starten op een school in Zaandam?',
        answer:
          'Na de kennismaking en jouw akkoord op het voorstel stellen we een vast team voor en plannen we een proefdag. In de praktijk kan dat binnen enkele weken.',
      },
      {
        question: 'Kunnen we eerst vrijblijvend kennismaken?',
        answer:
          'Ja. We komen graag langs op je school voor een gratis en vrijblijvende kennismaking. Bel 075 234 0345 of vraag het aan via de knop op deze pagina.',
      },
    ],
    service: {
      name: 'Pleincoach en pauzebegeleiding in Zaanstad',
      serviceType: 'Pleincoach / pauzebegeleiding basisschool',
      areaServed: ['Zaanstad', 'Zaandam', 'Koog aan de Zaan', 'Zaandijk', 'Wormerveer', 'Krommenie', 'Assendelft', 'Westzaan'],
    },
    related: ['/pleincoach', '/pauzebegeleiding', '/tso-overblijf', '/amsterdam'],
    ctaTitle: 'Kennismaken op jouw school in Zaanstad?',
    ctaText: 'We komen graag langs voor een gratis en vrijblijvend gesprek over de pauzes op jullie school.',
  },
  {
    path: '/amsterdam',
    navLabel: 'Pleincoach Amsterdam',
    teaser: 'Pleincoaches en pauzebegeleiding voor basisscholen in alle Amsterdamse stadsdelen.',
    kind: 'local',
    title: 'Pleincoach Amsterdam | Pauzebegeleiding basisscholen | Sterspelers',
    description:
      'Pleincoaches en pauzebegeleiding voor basisscholen in Amsterdam, van Noord tot Zuidoost. Vaste, VOG-gescreende begeleiders die leerkrachten ontlasten. Plan een kennismaking.',
    eyebrow: 'Basisscholen in Amsterdam',
    h1: 'Pleincoach en pauzebegeleiding in Amsterdam',
    intro: [
      'Amsterdamse basisscholen hebben vaak een druk plein en een krap team. Sterspelers levert vaste, VOG-gescreende pleincoaches die de pauze in goede banen leiden, zodat leerkrachten hun eigen pauze terugkrijgen.',
      'We werken in alle stadsdelen en zijn op zoek naar onze eerste partnerscholen in Amsterdam.',
    ],
    image: buitenspelenImage,
    imageAlt: 'Pleincoach van Sterspelers begeleidt kinderen tijdens het buitenspelen op een Amsterdams schoolplein',
    sections: [
      {
        heading: 'Pleincoaches voor Amsterdamse basisscholen',
        paragraphs: [
          'Van Noord tot Zuidoost en van Nieuw-West tot Oost: onze pleincoaches komen naar je school toe. In Amsterdam zijn schoolpleinen vaak klein en druk, met veel kinderen tegelijk buiten. Juist daar helpt een vaste pleincoach die het plein indeelt in spelzones, spelletjes opzet en overzicht houdt.',
          'Kinderen weten waar ze terechtkunnen, en de begeleider ziet het op tijd als een spel uit de hand dreigt te lopen of als een kind alleen staat. Zo blijft de pauze veilig en actief.',
        ],
      },
      {
        heading: 'Pauzebegeleiding in Amsterdam: onze diensten',
        paragraphs: [
          'We stemmen de inzet af op wat jouw school nodig heeft. Je kunt één onderdeel uitbesteden of de hele middagpauze in één hand leggen.',
        ],
        bullets: [
          'Pleincoaches tijdens de ochtend- en middagpauze.',
          'Pauzebegeleiding en pleindienst, zodat leerkrachten niet zelf naar buiten hoeven.',
          'Overblijfkrachten voor de tussenschoolse opvang (TSO).',
          'Sportclinics en naschoolse activiteiten, bijvoorbeeld binnen de Rijke Schooldag.',
        ],
      },
      {
        heading: 'Ontlasting van je team',
        paragraphs: [
          'Het lerarentekort raakt veel Amsterdamse scholen. Elke taak die je verantwoord kunt overdragen, geeft je team lucht. De pleindienst is zo’n taak: het is belangrijk werk, maar het hoeft niet door een leerkracht gedaan te worden. Met een vaste pleincoach krijgt je team de pauze terug en begint de les na de pauze rustiger.',
          'Omdat de begeleiders via Sterspelers werken, regel je zelf geen werving, roosters of vervanging. Je hebt één vaste coördinator als aanspreekpunt.',
        ],
      },
      {
        heading: 'Voor schoolbesturen met meerdere Amsterdamse scholen',
        paragraphs: [
          'Veel Amsterdamse basisscholen vallen onder een bestuur met scholen verspreid over de stad. We kunnen de pauzebegeleiding op meerdere locaties verzorgen, met per school een eigen vast team. Het bestuur houdt één aanspreekpunt voor planning, afspraken en evaluaties.',
          'Directeuren hoeven zo niet ieder afzonderlijk begeleiders te zoeken of vervanging te regelen, en op alle scholen geldt dezelfde werkwijze en kwaliteit.',
        ],
      },
      {
        heading: 'Zo starten we op jouw school',
        paragraphs: [
          'We beginnen met een kennismaking op locatie: we bekijken het plein, de pauzetijden en de afspraken die jullie al hebben. Daarna krijg je een voorstel op maat. Na jouw akkoord stellen we het vaste team voor en plannen we een proefdag met kinderen en team.',
          'Al onze begeleiders hebben een geldige VOG en volgen trainingen aan de Sterspelers Academie. Bij uitval staat er binnen 60 minuten een vervanger op je school.',
        ],
      },
    ],
    faq: [
      {
        question: 'In welke stadsdelen van Amsterdam werken jullie?',
        answer:
          'In alle stadsdelen: Noord, West, Nieuw-West, Centrum, Zuid, Oost en Zuidoost.',
      },
      {
        question: 'Werken jullie al met scholen in Amsterdam?',
        answer:
          'We zijn op dit moment op zoek naar onze eerste partnerscholen in Amsterdam en Zaanstad. We nemen graag de tijd om je school goed te leren kennen.',
      },
      {
        question: 'Ons schoolplein is klein. Werkt een pleincoach dan ook?',
        answer:
          'Ja. Juist op een klein, druk plein helpt het om met spelzones en vaste afspraken te werken. We kijken tijdens de kennismaking samen naar de mogelijkheden.',
      },
      {
        question: 'Kunnen jullie ook de TSO overnemen?',
        answer:
          'Ja. We leveren ook vaste overblijfkrachten voor de lunch en het buitenspelen. Lees meer op onze pagina over TSO en overblijf.',
      },
    ],
    service: {
      name: 'Pleincoach en pauzebegeleiding in Amsterdam',
      serviceType: 'Pleincoach / pauzebegeleiding basisschool',
      areaServed: ['Amsterdam'],
    },
    related: ['/pleincoach', '/pauzebegeleiding', '/rijke-schooldag', '/zaanstad'],
    ctaTitle: 'Kennismaken op jouw school in Amsterdam?',
    ctaText: 'We komen graag langs voor een gratis en vrijblijvend gesprek over de pauzes op jullie school.',
  },
];

export const SERVICE_PAGES = () => CONTENT_PAGES.filter((p) => p.kind === 'service');
export const LOCAL_PAGES = () => CONTENT_PAGES.filter((p) => p.kind === 'local');
export const findPage = (path: string) => CONTENT_PAGES.find((p) => p.path === path);
