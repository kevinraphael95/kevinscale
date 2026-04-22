// ============================================================
//  KevinScale — Questions & Configuration
//
//  kevinAnswer : ce que Kévin répondrait à cette question
//    0 = Absolument d'accord
//    1 = Plutôt d'accord
//    2 = Neutre / ne sait pas
//    3 = Plutôt pas d'accord
//    4 = Pas du tout d'accord
// ============================================================

const AXES = [
  { id: "economie",     label: "Économie",                   color: "#e63946", kevinScore: 72 },
  { id: "societe",      label: "Société & Mœurs",            color: "#ab47bc", kevinScore: 68 },
  { id: "etat",         label: "État & Libertés",            color: "#ffa726", kevinScore: 60 },
  { id: "ecologie",     label: "Écologie",                   color: "#66bb6a", kevinScore: 55 },
  { id: "geopolitique", label: "Géopolitique & Immigration", color: "#29b6f6", kevinScore: 65 },
  { id: "laicite",      label: "Laïcité",                    color: "#ffca28", kevinScore: 70 },
  { id: "justice",      label: "Justice & Sécurité",         color: "#ef5350", kevinScore: 58 },
  { id: "tech",         label: "Technologie",                color: "#26c6da", kevinScore: 75 },
];

const QUESTIONS = [

  // ── ÉCONOMIE ─────────────────────────────────────────────
  {
    id: "eco_1",
    axis: "economie",
    text: "Les services publics stratégiques (énergie, transports, eau) devraient rester dans les mains de l'État.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord (libéral)
    effect: [{ axis: "economie", agree: false }],
  },
  {
    id: "eco_2",
    axis: "economie",
    text: "La concurrence entre entreprises privées est le meilleur moyen d'améliorer la qualité des services.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_3",
    axis: "economie",
    text: "Un impôt sur la fortune élevé est indispensable pour réduire les inégalités.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "economie", agree: false }],
  },
  {
    id: "eco_4",
    axis: "economie",
    text: "Le marché libre, avec peu de régulation, est le système économique le plus efficace.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "economie", agree: true }],
  },
  {
    id: "eco_5",
    axis: "economie",
    text: "L'entrepreneur individuel mérite de garder l'essentiel de ce qu'il crée.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "economie", agree: true }],
  },

  // ── SOCIÉTÉ & MŒURS ──────────────────────────────────────
  {
    id: "soc_1",
    axis: "societe",
    text: "Le mariage entre personnes du même sexe est un droit fondamental qui ne devrait pas être remis en cause.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_2",
    axis: "societe",
    text: "Les personnes transgenres doivent pouvoir changer leur état civil librement.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "societe", agree: true }],
  },
  {
    id: "soc_3",
    axis: "societe",
    text: "La famille traditionnelle (homme, femme, enfants) est le modèle le plus stable pour la société.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "societe", agree: false }],
  },
  {
    id: "soc_4",
    axis: "societe",
    text: "La culture populaire actuelle valorise trop peu les valeurs traditionnelles.",
    kevinAnswer: 4, // Kévin : pas du tout d'accord
    effect: [{ axis: "societe", agree: false }],
  },
  {
    id: "soc_5",
    axis: "societe",
    text: "Le droit à l'avortement doit être garanti sans restriction dans les délais légaux.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "societe", agree: true }],
  },

  // ── ÉTAT & LIBERTÉS ───────────────────────────────────────
  {
    id: "eta_1",
    axis: "etat",
    text: "La légalisation du cannabis récréatif serait une mesure raisonnable.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "etat", agree: true }],
  },
  {
    id: "eta_2",
    axis: "etat",
    text: "La surveillance de masse par l'État est acceptable si elle améliore la sécurité.",
    kevinAnswer: 4, // Kévin : pas du tout d'accord
    effect: [{ axis: "etat", agree: false }],
  },
  {
    id: "eta_3",
    axis: "etat",
    text: "Les individus doivent pouvoir prendre des risques pour eux-mêmes sans que l'État intervienne.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "etat", agree: true }],
  },
  {
    id: "eta_4",
    axis: "etat",
    text: "L'État devrait avoir le droit de censurer des contenus jugés dangereux sur internet.",
    kevinAnswer: 4, // Kévin : pas du tout d'accord
    effect: [{ axis: "etat", agree: false }],
  },

  // ── ÉCOLOGIE ─────────────────────────────────────────────
  {
    id: "ecol_1",
    axis: "ecologie",
    text: "Le nucléaire doit jouer un rôle central dans la transition énergétique française.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "ecol_2",
    axis: "ecologie",
    text: "La croissance économique et la protection de l'environnement sont compatibles.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "ecologie", agree: true }],
  },
  {
    id: "ecol_3",
    axis: "ecologie",
    text: "Il faut interdire les vols intérieurs remplaçables par le train.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "ecologie", agree: false }],
  },
  {
    id: "ecol_4",
    axis: "ecologie",
    text: "La décroissance économique est nécessaire pour sauver la planète.",
    kevinAnswer: 4, // Kévin : pas du tout d'accord
    effect: [{ axis: "ecologie", agree: false }],
  },

  // ── GÉOPOLITIQUE & IMMIGRATION ────────────────────────────
  {
    id: "geo_1",
    axis: "geopolitique",
    text: "L'immigration est globalement une richesse économique et culturelle pour la France.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_2",
    axis: "geopolitique",
    text: "La France devrait renforcer les contrôles aux frontières et limiter l'immigration.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "geopolitique", agree: false }],
  },
  {
    id: "geo_3",
    axis: "geopolitique",
    text: "La construction européenne est globalement positive pour la France.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "geopolitique", agree: true }],
  },
  {
    id: "geo_4",
    axis: "geopolitique",
    text: "La souveraineté nationale doit primer sur les décisions des institutions européennes.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "geopolitique", agree: false }],
  },

  // ── LAÏCITÉ ──────────────────────────────────────────────
  {
    id: "lai_1",
    axis: "laicite",
    text: "Les signes religieux ostentatoires n'ont pas leur place dans les services publics.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_2",
    axis: "laicite",
    text: "La religion devrait rester strictement dans la sphère privée.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_3",
    axis: "laicite",
    text: "Les associations cultuelles ne devraient recevoir aucun financement public.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "laicite", agree: true }],
  },
  {
    id: "lai_4",
    axis: "laicite",
    text: "La France devrait reconnaître officiellement son héritage chrétien dans son identité nationale.",
    kevinAnswer: 4, // Kévin : pas du tout d'accord
    effect: [{ axis: "laicite", agree: false }],
  },

  // ── JUSTICE & SÉCURITÉ ────────────────────────────────────
  {
    id: "jus_1",
    axis: "justice",
    text: "La réinsertion des détenus devrait être la priorité absolue de la politique pénale.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "justice", agree: true }],
  },
  {
    id: "jus_2",
    axis: "justice",
    text: "Les peines minimales obligatoires sont nécessaires pour certains crimes graves.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "justice", agree: false }],
  },
  {
    id: "jus_3",
    axis: "justice",
    text: "La police a globalement besoin de plus de moyens et d'effectifs.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "justice", agree: false }],
  },
  {
    id: "jus_4",
    axis: "justice",
    text: "Les violences policières sont un problème structurel en France qui mérite une réforme profonde.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "justice", agree: true }],
  },

  // ── TECHNOLOGIE ──────────────────────────────────────────
  {
    id: "tec_1",
    axis: "tech",
    text: "L'intelligence artificielle va globalement améliorer la qualité de vie des gens.",
    kevinAnswer: 0, // Kévin : absolument d'accord
    effect: [{ axis: "tech", agree: true }],
  },
  {
    id: "tec_2",
    axis: "tech",
    text: "Les grandes entreprises tech ont trop de pouvoir et devraient être démembrées.",
    kevinAnswer: 2, // Kévin : neutre
    effect: [{ axis: "tech", agree: false }],
  },
  {
    id: "tec_3",
    axis: "tech",
    text: "Le progrès technologique est la meilleure réponse aux grands défis de l'humanité.",
    kevinAnswer: 1, // Kévin : plutôt d'accord
    effect: [{ axis: "tech", agree: true }],
  },
  {
    id: "tec_4",
    axis: "tech",
    text: "Il faudrait un moratoire sur certains développements technologiques risqués.",
    kevinAnswer: 3, // Kévin : plutôt pas d'accord
    effect: [{ axis: "tech", agree: false }],
  },
];

const VERDICTS = [
  { min: 90, title: "Clone de Kévin",       emoji: "🧬", text: "Statistiquement, tu es Kévin. Vérifiez que vous n'êtes pas la même personne." },
  { min: 75, title: "Très proche de Kévin", emoji: "🤝", text: "Vous pourriez passer une soirée entière à vous acquiescer mutuellement." },
  { min: 55, title: "Dans le camp Kevin",   emoji: "✅", text: "Tu partages l'essentiel avec Kévin, quelques désaccords ponctuels." },
  { min: 40, title: "À mi-chemin",          emoji: "⚖️", text: "Vous vous rejoignez sur certains axes, divergez sur d'autres." },
  { min: 25, title: "Éloigné de Kévin",     emoji: "🌊", text: "Des planètes idéologiques assez différentes." },
  { min: 10, title: "Quasi-opposé",         emoji: "❄️", text: "Presque rien en commun. La coexistence est possible." },
  { min: 0,  title: "L'Anti-Kévin",         emoji: "🚨", text: "Tu es l'exact opposé de Kévin sur quasiment tout." },
];

if (typeof module !== "undefined") module.exports = { AXES, QUESTIONS, VERDICTS };
