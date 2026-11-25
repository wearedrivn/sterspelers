import { ServiceItem, ValueProp, StepItem, Testimonial, FaqItem, StatItem } from '../types';
import heroImage from '../assets/images/hero.webp';
import buitenspelenImage from '../assets/images/buitenspelen.webp';
import kinderbegeleidingImage from '../assets/images/kinderbegeleiding.webp';
import activiteitenImage from '../assets/images/activiteiten.webp';

export const HERO_IMAGE = heroImage;
export const BUITENSPELEN_IMAGE = buitenspelenImage;
export const KINDERBEGELEIDING_IMAGE = kinderbegeleidingImage;
export const ACTIVITEITEN_IMAGE = activiteitenImage;

export const STATS: StatItem[] = [
  {
    value: '100%',
    numericValue: 100,
    label: 'VOG-Gecertificeerd',
    sublabel: 'Al onze begeleiders zijn gescreend en betrouwbaar',
    icon: 'ShieldCheck'
  },
  {
    value: '1-2 weken',
    numericValue: 2,
    label: 'Snel Inzetbaar',
    sublabel: 'Van kennismaking tot start op uw schoolplein',
    icon: 'Zap'
  },
  {
    value: 'Vast',
    numericValue: 1,
    label: 'Persoonlijke Begeleiding',
    sublabel: 'Vaste, herkenbare begeleiders per school',
    icon: 'Users'
  },
  {
    value: 'Kwaliteit',
    numericValue: 1,
    label: 'Kwaliteit & Snel Schakelen',
    sublabel: 'Persoonlijke aanpak met korte lijnen',
    icon: 'Star'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'buitenspelen',
    pagePath: '/pleincoach',
    title: 'Buitenspelen',
    subtitle: 'Energiek & Georganiseerd Pauzeklimaat',
    description: 'Structurele ondersteuning op het schoolplein die kinderen uitdaagt te bewegen, samen te werken en op te laden voor de middaglessen.',
    image: BUITENSPELEN_IMAGE,
    imageAlt: 'Pleincoach van Sterspelers begeleidt een balspel met kinderen op het schoolplein',
    badge: 'Pleincoaches',
    audience: 'Basisscholen',
    highlights: [
      'Gecertificeerde spelbegeleiders op het plein',
      'Thematische spelzones met het materiaal van de school',
      'Duidelijke spelzones en vaste afspraken op het plein'
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
      certification: 'VOG-gescreend & getraind via de Sterspelers Academie'
    }
  },
  {
    id: 'kinderbegeleiding',
    pagePath: '/pauzebegeleiding',
    title: 'Kinderbegeleiding',
    subtitle: 'Begeleiding Tijdens de Pauze',
    description: 'Volledige ontzorging tijdens de pauze met ervaringsdeskundige begeleiders en duidelijke dagstructuur.',
    image: KINDERBEGELEIDING_IMAGE,
    imageAlt: 'Begeleider van Sterspelers met een groep basisschoolkinderen tijdens de pauze',
    badge: 'Volledig Ontzorgd',
    audience: 'Schoolbesturen & Basisscholen',
    highlights: [
      'Vaste, ervaren begeleiders per klas',
      'Rustige lunchovergang en positieve bejegening',
      'Voldoet aan de geldende kwaliteitsnormen'
    ],
    details: {
      overview: 'Met onze Kinderbegeleiding bieden we een professionele en warme omgeving tijdens de pauze. Onze begeleiders zijn getraind via de Sterspelers Academie en zorgen voor rust, structuur en een naadloze overgang naar het buitenspelen.',
      targetAge: 'Basisonderwijs & Speciaal Basisonderwijs',
      keyBenefits: [
        'Vaste en herkenbare gezichten voor kinderen en ouders',
        'Professioneel incidenten- en communicatieprotocol',
        'Koppeling tussen schoolvisie en begeleiding',
        'Continuïteit gegarandeerd bij ziekte of uitval'
      ],
      certification: 'VOG-gescreend & getraind via de Sterspelers Academie'
    }
  },
  {
    id: 'activiteiten',
    pagePath: '/rijke-schooldag',
    title: 'Activiteiten & Clinics',
    subtitle: 'Na-schoolse Sport & Creatieve Workshops',
    description: 'Inspirerende sportclinics, cultuurworkshops en bewegingsprogrammas die aansluiten bij gemeentelijke doelen en schoolthema’s.',
    image: ACTIVITEITEN_IMAGE,
    imageAlt: 'Kinderen doen mee aan een sportclinic van Sterspelers na schooltijd',
    badge: 'Sport & Cultuur',
    audience: 'Gemeenten, Scholen & BSO',
    highlights: [
      'Clinics in atletiek, balvaardigheid, dans & freerun',
      'Maatwerk programma’s voor BLA/Rijke Schooldag',
      'Vaste trainers die het programma op maat maken'
    ],
    details: {
      overview: 'Onze speciale activiteiten stimuleren de motorische en sociale ontwikkeling van kinderen buiten het reguliere onderwijsprogramma. Ideaal ter invulling van de Rijke Schooldag, vakantiesport en gemeentelijke subsidietrajecten.',
      targetAge: '4 t/m 16 jaar',
      keyBenefits: [
        'Direct inzetbaar voor de Rijke Schooldag',
        'Vaste trainers per school of groep',
        'Schoolpleinmateriaal desgewenst via Sterspelers aan te schaffen'
      ],
      certification: 'VOG-gescreend & getraind via de Sterspelers Academie'
    }
  }
];

export const VALUES: ValueProp[] = [
  {
    id: 'veilig',
    iconName: 'ShieldCheck',
    title: 'Veilig & Geborgd',
    subtitle: 'Veiligheid staat altijd voorop',
    description: 'Iedere Sterspeler is in het bezit van een geldige VOG en heeft onze interne Veiligheidsacademie doorlopen.',
    keyPoints: [
      '100% VOG-gecontroleerd personeel',
      'Opgeleid via de Sterspelers Academie',
      'Strikte protocollen voor calamiteiten'
    ],
    badge: 'Gegarandeerde Veiligheid'
  },
  {
    id: 'professioneel',
    iconName: 'Award',
    title: 'Professioneel & Vaste Gezichten',
    subtitle: 'Echte partners voor uw school',
    description: 'Wij werken met vaste begeleiders, getraind via de Sterspelers Academie, die het schoolklimaat kennen en direct samenwerken met de schoolleiding.',
    keyPoints: [
      'Vaste poule van VOG-gescreende begeleiders',
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
    badge: 'Pedagogische Aanpak'
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
    description: 'Selectie van vaste Sterspelers-begeleiders die passen bij de identiteit van de school. Inrichting van spelzones met het spelmateriaal van de school.',
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

// Reviews staan uit tot er echte, toestemde reviews van partnerscholen zijn.
// Voeg ze hier toe en zet SHOW_TESTIMONIALS in App.tsx op true.
export const TESTIMONIALS: Testimonial[] = [];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'scholen',
    question: 'Hoe waarborgt Sterspelers de continuïteit bij ziekte van een begeleider?',
    answer: 'Sterspelers werkt met regionale invalpools van ervaren begeleiders die reeds bekend zijn met onze protocollen. Bij onverhoopte ziekte staat er binnen 60 minuten een vervangende Sterspeler op de locatie.'
  },
  {
    id: 'faq-2',
    category: 'scholen',
    question: 'Wie zijn de begeleiders van Sterspelers?',
    answer: 'Al onze begeleiders hebben een geldige Verklaring Omtrent het Gedrag (VOG) en worden getraind via onze eigen Sterspelers Academie, onder meer in spelbegeleiding, een positieve benadering van kinderen en het omgaan met lastige situaties. Ze staan vast op dezelfde school, zodat kinderen en het team hen goed leren kennen.'
  },
  {
    id: 'faq-3',
    category: 'scholen',
    question: 'Kunnen we Sterspelers inzetten via subsidievoorzieningen zoals de Rijke Schooldag?',
    answer: 'Ja, absoluut. Onze programma’s en na-schoolse clinics zijn volledig afgestemd op de subsidievoorwaarden van het Programma School en Omgeving (Rijke Schooldag) en gemeentelijke Sportakkoorden. Wij helpen direct mee bij de subsidieaanvraag.'
  },
  {
    id: 'faq-regio',
    category: 'scholen',
    question: 'In welke regio’s is Sterspelers actief?',
    answer: 'Sterspelers levert pleincoaches en pauzebegeleiding aan basisscholen, schoolbesturen en gemeenten in heel Nederland. Voor Zaanstad en Amsterdam hebben we aparte pagina’s, maar ook daarbuiten komen we graag langs voor een kennismaking.'
  },
  {
    id: 'faq-materiaal',
    category: 'scholen',
    question: 'Nemen de begeleiders zelf spelmateriaal mee?',
    answer: 'Nee, onze begeleiders werken met het spelmateriaal van de school. Heeft uw school nog onvoldoende of verouderd materiaal? Dan kunt u via Sterspelers schoolpleinmateriaal aanschaffen. We adviseren u graag over wat bij uw plein en leerlingen past.'
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
    answer: 'Aangezien iedere school uniek is qua leerlingenaantal, pleinindeling en gewenste begeleidingsgraad, maken we altijd een maatwerkberekening. Door onze efficiënte planning liggen de kosten vaak lager dan het zelf organiseren en beheren van de begeleiding.'
  },
  {
    id: 'faq-6',
    category: 'ouders',
    question: 'Hoe worden ouders geïnformeerd over de activiteiten en eventuele incidenten?',
    answer: 'Bijzonderheden tijdens de pauze communiceren wij rechtstreeks met de groepsleerkracht, die dit vervolgens terugkoppelt aan de ouders.'
  }
];
