export const acheterParcellePage = {
  hero: {
    title: "Nos tarifs et options de financement",
    lead:
      "Crédit direct BEPAS à 0 % d'intérêt. Commencez par un acompte accessible, puis étalez le solde sur 24 mois ou réglez en une tranche.",
    slideIntervalMs: 10_000,
    slides: [
      {
        src: "/heroAccueil1.jpg",
        alt: "Famille congolaise heureuse, symbole de la propriété foncière avec BEPAS",
      },
      {
        src: "/heroAccueil2.jpg",
        alt: "Famille devant sa parcelle, projet immobilier BEPAS à Kinshasa",
      },
    ],
    ctaPrimary: {
      label: "Nous contacter",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Voir les cités",
      href: "/projets",
    },
  },
  pricing: {
    acompteLabel: "Acompte",
    financingTitle: "Nos 2 options de financement :",
    financing24: "Paiement en 24 mois",
    financingSingle: "Paiement en une tranche",
    cta: {
      label: "En savoir plus",
      href: "/contact",
    },
    infoBanner: {
      title: "Tu ne sais pas quelle parcelle te convient ?",
      lead:
        "Viens à l'une de nos visites guidées ou prends un rendez-vous conseil aux Galeries Présidentielles. On t'explique les tarifs, l'acompte et l'échelonnement adapté à ton budget.",
      cta: {
        label: "Réserver ma visite",
        href: "/contact",
      },
    },
  },
  pillars: {
    title: "Pourquoi acheter chez BEPAS ?",
    lead: "Un modèle pensé pour les familles congolaises et la diaspora, sans intermédiaire bancaire.",
    items: [
      {
        icon: "calendar" as const,
        title: "Crédit échelonné",
        description:
          "Payez tranquillement sur 12 à 24 mois, à votre rythme et selon vos moyens.",
      },
      {
        icon: "landmark" as const,
        title: "Taux d'intérêt à 0 %",
        description:
          "Pas de banque, pas d'intérêts cachés. Le prix fixé au départ reste le même jusqu'à la fin.",
      },
      {
        icon: "shield" as const,
        title: "Sécurisation garantie",
        description:
          "Bornage physique et suivi administratif jusqu'à l'obtention de votre titre foncier.",
      },
    ],
  },
  steps: {
    titleBefore: "Les 5 étapes",
    titleHighlight: "pour acquérir votre parcelle",
    lead:
      "Un processus transparent et sécurisé, de la première visite à la remise de votre titre.",
    items: [
      {
        number: "01",
        title: "Choix du terrain et visite guidée",
        description:
          "Choisissez votre commune (Maluku, N'sele ou Mont Ngafula). Nos conseillers vous accompagnent gratuitement sur le terrain.",
      },
      {
        number: "02",
        title: "Signature du contrat aux bureaux",
        description:
          "Rendez-vous aux Galeries Présidentielles (Gombe) ou finalisez à distance si vous résidez à l'étranger.",
      },
      {
        number: "03",
        title: "Versement de l'acompte initial",
        description:
          "L'acompte valide votre réservation et bloque la parcelle, adapté à votre budget.",
      },
      {
        number: "04",
        title: "Mensualités souples (12 à 24 mois)",
        description:
          "Réglez le solde par virements ou dépôts mensuels. Crédit direct à 0 % d'intérêt.",
      },
      {
        number: "05",
        title: "Bornage physique et titrage foncier",
        description:
          "Nos géomètres bornent votre terrain. BEPAS suit le dossier jusqu'au titre foncier officiel.",
      },
    ],
  },
  communes: {
    title: "Où acheter ?",
    lead: "Nos communes d'avenir à Kinshasa, avec parcelles viabilisées et accompagnement BEPAS.",
    cta: {
      label: "Découvrir cette commune",
      href: "/projets",
    },
  },
  faq: {
    title: "Questions sur l'achat",
    items: [
      {
        question: "Le crédit proposé par BEPAS comporte-t-il des intérêts bancaires ?",
        answer:
          "Non. BEPAS propose un crédit direct, sans intermédiaire financier. Le taux d'intérêt est de 0 %. Le prix convenu au départ reste le même jusqu'à la fin de vos remboursements.",
      },
      {
        question: "Comment se déroulent les visites des parcelles ?",
        answer:
          "Les visites sur site sont organisées régulièrement par nos conseillers. Contactez-nous pour réserver votre place. Nous partons de nos bureaux aux Galeries Présidentielles à Gombe.",
      },
      {
        question: "Je fais partie de la diaspora, puis-je acheter ?",
        answer:
          "Oui. BEPAS accompagne les Congolais à l'étranger avec une procédure sécurisée à distance : signature, suivi photo/vidéo et modalités de paiement adaptées.",
      },
      {
        question: "Quels documents remis à la fin du paiement ?",
        answer:
          "Après les paiements, nos géomètres effectuent le bornage officiel. Vous recevez votre fiche parcellaire et le contrat de cession. BEPAS entame les démarches pour votre certificat d'enregistrement.",
      },
      {
        question: "Puis-je construire sur ma parcelle après l'achat ?",
        answer:
          "Oui. Dès votre acompte, nous vous faisons visiter la parcelle et vous pouvez entamer vos travaux. Notre équipe vous accompagne pour la suite de votre projet.",
      },
    ],
  },
  finalCta: {
    title: "Prêt à planifier votre visite ou à souscrire ?",
    lead:
      "Notre équipe aux Galeries Présidentielles est prête à vous conseiller et à adapter nos plans d'échelonnement à vos possibilités.",
    ctaPrimary: {
      label: "Nous contacter",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Découvrir les cités",
      href: "/projets",
    },
  },
} as const
