import { ServiceItem, ValueProp, StepItem, Testimonial, FaqItem, StatItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_kids_playing_1785453295922.jpg';
export const BUITENSPELEN_IMAGE = '/src/assets/images/buitenspelen_card_1785453308815.jpg';
export const KINDERBEGELEIDING_IMAGE = '/src/assets/images/kinderbegeleiding_card_1785453321147.jpg';
export const ACTIVITEITEN_IMAGE = '/src/assets/images/activiteiten_card_1785453333528.jpg';

export const STATS: StatItem[] = [
  {
    value: '150+',
    numericValue: 150,
    label: 'Scholen & Besturen',
    sublabel: 'Actief in 35+ Nederlandse gemeenten',
    icon: 'School'
  },
  {
    value: '25.000+',
    numericValue: 25000,
    label: 'Kinderen Bereikt',
    sublabel: 'Dagelijks veilige & actieve pauzes',
    icon: 'Smile'
  },
  {
    value: '12.000+',
    numericValue: 12000,
    label: 'Activiteiten Georganiseerd',
    sublabel: 'Sport, spel en creatieve clinics',
    icon: 'Trophy'
  },
  {
    value: '9.6 / 10',
    numericValue: 9.6,
    label: 'Tevredenheidsscore',
    sublabel: 'Beoordeeld door schooldirecteuren',
    icon: 'Star'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'buitenspelen',
    title: 'Buitenspelen',
    subtitle: 'Energiek & Georganiseerd Pauzeklimaat',
    description: 'Structurele ondersteuning op het schoolplein die kinderen uitdaagt te bewegen, samen te werken en op te laden voor de middaglessen.',
    image: BUITENSPELEN_IMAGE,
    badge: 'Populairst bij Scholen',
    audience: 'Primaire & Secundaire Scholen',
    highlights: [
      'Gecertificeerde spelbegeleiders op het plein',
      'Actieve spelmaterialen & thematische zones',
      'Vermindering van pauze-incidenten met 65%'
    ],
    details: {
      overview: 'Buitenspelen met Sterspelers transformeert de pauze op school van een onrustig meethoofd naar een georganiseerde, positieve beleving. Onze sport- en spelbegeleiders richten het schoolplein in met duidelijke zones, stimuleren inclusiviteit en ontlasten leerkrachten volledig.',
      targetAge: 'Groep 1 t/m 8 (4 t/m 12 jaar)',
      keyBenefits: [
        'Leerkrachten ervaren echte pauze en kunnen zich voorbereiden',
        'Direct minder pestgedrag en meer saamhorigheid',
        'Kinderen komen energiek en gefocust terug in de klas',
        'Inclusieve spelvormen voor ieder bewegingsniveau'
      ],
      certification: 'Pedagogisch Veilig Keurmerk & VOG-gecontroleerd'
    }
  },
  {
    id: 'kinderbegeleiding',
    title: 'Kinderbegeleiding',
    subtitle: 'Professionele Tussenschoolse Opvang (TSO)',
    description: 'Volledige ontzorging van de tussenschoolse opvang met gediplomeerde pedagogisch medewerkers en duidelijke dagstructuur.',
    image: KINDERBEGELEIDING_IMAGE,
    badge: 'Volledig Ontzorgd',
    audience: 'Schoolbesturen & Basisscholen',
    highlights: [
      'Vaste gediplomeerde begeleiders per klas',
      'Rustige lunchovergang en positieve bejegening',
      'Voldoet aan alle wettelijke TSO-kwaliteitsnormen'
    ],
    details: {
      overview: 'Met onze Kinderbegeleiding bieden we een professionele en warme omgeving gedurende het lunchuur. Onze begeleiders hebben een pedagogische achtergrond en zorgen voor een rustige eetsfeer en een naadloze overgang naar het buitenspelen.',
      targetAge: 'Basisonderwijs & Speciaal Basisonderwijs',
      keyBenefits: [
        'Vaste en herkenbare gezichten voor kinderen en ouders',
        'Professioneel incidenten- en communicatieprotocol',
        'Koppeling tussen schoolvisie en pauzebegeleiding',
        'Continuïteit gegarandeerd bij ziekte of uitval'
      ],
      certification: 'Conform Wet Kinderopvang & NIK-kwaliteitskader'
    }
  },
  {
    id: 'activiteiten',
    title: 'Activiteiten & Clinics',
    subtitle: 'Na-schoolse Sport & Creatieve Workshops',
    description: 'Inspirerende sportclinics, cultuurworkshops en bewegingsprogrammas die aansluiten bij gemeentelijke doelen en schoolthema’s.',
    image: ACTIVITEITEN_IMAGE,
    badge: 'Sport & Cultuur',
    audience: 'Gemeenten, Scholen & BSO',
    highlights: [
      'Clinics in atletiek, balvaardigheid, dans & freerun',
      'Maatwerk programma’s voor BLA/Rijke Schooldag',
      'Rapportage van participatie en motorische voortgang'
    ],
    details: {
      overview: 'Onze speciale activiteiten stimuleren de motorische en sociale ontwikkeling van kinderen buiten het reguliere onderwijsprogramma. Ideaal ter invulling van de Rijke Schooldag, vakantiesport en gemeentelijke subsidietrajecten.',
      targetAge: '4 t/m 16 jaar',
      keyBenefits: [
        'Direct inzetbaar voor de Rijke Schooldag',
        'Professionele gastdocenten en gediplomeerde trainers',
        'Inclusief alle professionele sport- en spelmaterialen',
        'Eenvoudige ouderinlog en inschrijfsysteem'
      ],
      certification: 'NOC*NSF Erkende Sportbegeleiding'
    }
  }
];

export const VALUES: ValueProp[] = [
  {
    id: 'veilig',
    iconName: 'ShieldCheck',
    title: 'Veilig & Geborgd',
    subtitle: 'Veiligheid staat altijd voorop',
    description: 'Iedere Sterspeler is in het bezit van een geldige VOG, EHBO-certificaat voor kinderen en heeft onze interne Veiligheidsacademie doorlopen.',
    keyPoints: [
      '100% VOG-gecontroleerd personeel',
      'Kinder-EHBO en BHV gecertificeerd',
      'Strikte protocollen voor calamiteiten'
    ],
    badge: 'Gegarandeerde Veiligheid'
  },
  {
    id: 'professioneel',
    iconName: 'Award',
    title: 'Professioneel & Vaste Gezichten',
    subtitle: 'Echte partners voor uw school',
    description: 'Wij werken met vaste, opgeleide begeleiders die het schoolklimaat kennen en direct samenwerken met de schoolleiding.',
    keyPoints: [
      'Vaste poule van gekwalificeerde krachten',
      'Continuïteitsgarantie bij vervanging',
      'Periodieke kwaliteitsaudits & voortgangsgesprekken'
    ],
    badge: 'Hoogste Kwaliteitsstandaard'
  },
  {
    id: 'pedagogisch',
    iconName: 'HeartHandshake',
    title: 'Pedagogisch Sterk',
    subtitle: 'Stimuleren van positief gedrag',
    description: 'Onze methodiek legt de nadruk op positieve bejegening, het aanleren van fair play en het opbouwen van zelfvertrouwen bij elk kind.',
    keyPoints: [
      'Positieve bejegening & oplossingsgericht werken',
      'Stimuleren van samenwerking & inclusiviteit',
      'Focus op emotionele en motorische groei'
    ],
    badge: 'Pedagogisch Kwaliteitskader'
  },
  {
    id: 'betrouwbaar',
    iconName: 'CheckCircle2',
    title: 'Betrouwbaar & Zorgeloos',
    subtitle: 'Geen administratieve druk voor de school',
    description: 'Van roosters en vervanging tot oudercommunicatie en kwaliteitsmetingen: Sterspelers ontzorgt de schoolleiding volledig.',
    keyPoints: [
      'Transparante rapportages en overleg',
      'Geen werkgeversrisico voor de school',
      '100% op-maat-gemaakte overeenkomsten'
    ],
    badge: 'Volledig Ontzorgd'
  }
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Vrijblijvende Kennismaking & Audit',
    duration: 'Week 1',
    description: 'We bezoeken uw schoolplein of gemeente om de huidige situatie, wensen en schoolcultuur grondig in kaart te brengen.',
    details: [
      'Analyse van het huidige pauzeklimaat & pleinindeling',
      'Inventarisatie van groepsgrootte en specifieke wensen',
      'Heldere vrijblijvende voorstel- en kostenberekening'
    ]
  },
  {
    number: '02',
    title: 'Op Maat Implementatie & Koppeling',
    duration: 'Week 2-3',
    description: 'Selectie van vaste Sterspelers-begeleiders die passen bij de identiteit van de school. Inrichting van spelzones en materialen.',
    details: [
      'Voorstel van het vaste team aan de schoolleiding',
      'Afstemming van het pedagogisch protocol & de huisregels',
      'Proefdag met kinderen, leerkrachten en team'
    ]
  },
  {
    number: '03',
    title: 'Zorgeloze Uitvoering & Kwaliteitsborging',
    duration: 'Continu',
    description: 'Dagelijkse professionele begeleiding, continue evaluatie via ons kwaliteitsdashboard en periodiek overleg.',
    details: [
      'Vaste coördinator als aanspreekpunt voor de school',
      'Kwartaalmatige tevredenheidsevaluatie met directie',
      'Gegarandeerde vervanging bij ziekte of uitval'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Margreet van de Berg',
    role: 'Schooldirecteur',
    organization: 'Basisschool De Zevenster, Utrecht',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    category: 'scholen',
    quote: 'Sinds de samenwerking met Sterspelers is het rustiger op het schoolplein en komen onze leerlingen energiek en ontspannen terug in de klas. Onze leerkrachten ervaren eindelijk een échte pauze.',
    rating: 5,
    location: 'Utrecht',
    highlightText: 'Minder pauze-incidenten & gemoedsrust voor leerkrachten'
  },
  {
    id: '2',
    name: 'Robert Jan Visser',
    role: 'Voorzitter College van Bestuur',
    organization: 'Onderwijsstichting Primair, Amsterdam',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    category: 'besturen',
    quote: 'Sterspelers levert een constante, hoge pedagogische kwaliteit over al onze 12 locaties. Geen administratieve rompslomp meer voor ons bestuur, maar pure professionaliteit.',
    rating: 5,
    location: 'Amsterdam',
    highlightText: 'Constante kwaliteit over 12 locaties'
  },
  {
    id: '3',
    name: 'Sanne & Daan de Ruiter',
    role: 'Ouders van Lucas (Groep 5)',
    organization: 'Kindcentrum Het Kompas, Amersfoort',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    category: 'ouders',
    quote: 'Lucas keek vroeger op tegen de drukke lunchpauze. Dankzij de Sterspelers coaches heeft hij nu vaste vrienden gemaakt bij de sportspelletjes. Als ouder geef je je kind met een gerust hart mee.',
    rating: 5,
    location: 'Amersfoort',
    highlightText: 'Vaste vrienden en een veilig gevoel'
  },
  {
    id: '4',
    name: 'Karin Mulder',
    role: 'Beleidsadviseur Jeugd & Sport',
    organization: 'Gemeente Hilversum',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    category: 'scholen',
    quote: 'De combinatie van sport, spel en beweging na schooltijd sluit naadloos aan bij onze gemeentelijke gezondheidsdoelen. De participatie onder kwetsbare doelgroepen is aantoonbaar gestegen.',
    rating: 5,
    location: 'Hilversum',
    highlightText: 'Aantoonbare stijging in sportparticipatie'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'scholen',
    question: 'Hoe waarborgt Sterspelers de continuïteit bij ziekte van een begeleider?',
    answer: 'Sterspelers werkt met regionale invalpools van gediplomeerde begeleiders die reeds bekend zijn met onze protocollen. Bij onverhoopte ziekte staat er binnen 60 minuten een vervangende Sterspeler op de locatie.'
  },
  {
    id: 'faq-2',
    category: 'scholen',
    question: 'Aan welke pedagogische eisen en kwalificaties voldoen de begeleiders?',
    answer: 'Al onze begeleiders bezitten een Verklaring Omtrent het Gedrag (VOG), een geldige Kinder-EHBO/BHV certificering en een pedagogische of sportgerelateerde opleiding (MBO/HBO Sport en Bewegen, ALO, PABO of Pedagogiek). Bovendien volgen zij jaarlijks trainingen aan onze eigen Sterspelers Academie.'
  },
  {
    id: 'faq-3',
    category: 'scholen',
    question: 'Kunnen we Sterspelers inzetten via subsidievoorzieningen zoals de Rijke Schooldag?',
    answer: 'Ja, absoluut. Onze programma’s en na-schoolse clinics zijn volledig afgestemd op de subsidievoorwaarden van het Programma School en Omgeving (Rijke Schooldag) en gemeentelijke Sportakkoorden. Wij helpen direct mee bij de subsidieaanvraag.'
  },
  {
    id: 'faq-4',
    category: 'begeleiders',
    question: 'Hoe stemmen jullie af met de visie en regels van onze school?',
    answer: 'Tijdens de implementatiefase (Stap 2) nemen wij de huisregels, straf- en beloningssystemen en kernwaarden van de school over. Onze begeleiders handelen eenduidig met het leerkrachten- en directieteam.'
  },
  {
    id: 'faq-5',
    category: 'ouders',
    question: 'Wat kost de inzet van Sterspelers voor een basisschool?',
    answer: 'Aangezien iedere school uniek is qua leerlingenaantal, pleinindeling en gewenste begeleidingsgraad, maken we altijd een maatwerkberekening. Door onze efficiënte planning liggen de kosten vaak lager dan het zelf organiseren en beheren van TSO.'
  },
  {
    id: 'faq-6',
    category: 'ouders',
    question: 'Hoe worden ouders geïnformeerd over de activiteiten en eventuele incidenten?',
    answer: 'Wij communiceren rechtstreeks via het bestaande ouderportaal van de school (bijv. Social Schools of Parro) of via onze periodieke nieuwsbrief. Bij bijzonderheden tijdens de pauze is er altijd een directe overdracht met de groepsleerkracht.'
  }
];

export const TRUST_PARTNERS = [
  { name: 'Basisschool De Zevenster', location: 'Utrecht' },
  { name: 'Onderwijsstichting Primair', location: 'Amsterdam' },
  { name: 'Kindcentrum Het Kompas', location: 'Amersfoort' },
  { name: 'Gemeente Hilversum', location: 'Hilversum' },
  { name: 'Kwaliteitsnetwerk TSO', location: 'Nederland' }
];
