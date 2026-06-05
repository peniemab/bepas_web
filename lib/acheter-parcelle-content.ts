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
      title: "Tu ne sais pas dans quelle commune acheter ?",
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
    lead:
      "Les communes d'avenir (N'sele, Maluku, Mont Ngafula), avec parcelles viabilisées et accompagnement BEPAS.",
    cta: {
      label: "Découvrir cette commune",
      href: "/projets",
    },
  },
  faq: {
    title: "Questions sur l'achat, la parcelle et le titre",
    items: [
      {
        question:
          "Le crédit proposé par BEPAS comporte-t-il des intérêts bancaires ?",
        answer:
          "Non. BEPAS propose un crédit direct, sans intermédiaire financier. Le taux d'intérêt est de 0 %. Le prix convenu au départ reste le même jusqu'à la fin de vos remboursements.",
      },
      {
        question: "Comment se déroulent les visites des parcelles ?",
        answer:
          "Les visites sur site sont organisées régulièrement par nos conseillers. Contactez-nous pour réserver votre place. Nous partons de nos bureaux aux Anciennes Galeries Présidentielles, 2e niveau, local 2M4, à Gombe (avenue de la Paix).",
      },
      {
        question: "Je fais partie de la diaspora, puis-je acheter ?",
        answer:
          "Oui. BEPAS accompagne les Congolais résidant à l'étranger : prise de contact à distance, explication des tarifs et de l'acompte, signature et suivi de votre dossier selon les modalités prévues. Vous traitez directement avec une société enregistrée, avec des bureaux à Kinshasa-Gombe.",
      },
      {
        question:
          "Comment BEPAS sécurise-t-elle mon achat et comment se passe le bornage ?",
        answer:
          "La sécurisation ne constitue pas une prestation vendue à part : elle fait partie de l'achat d'une parcelle BEPAS. Après votre contrat et vos paiements selon l'échéancier convenu, BEPAS organise le bornage de votre lot pour en fixer les limites sur le terrain. Vous recevez les documents liés à votre parcelle, dont la fiche parcellaire. BEPAS assure ensuite le suivi des démarches pour l'établissement du titre de propriété à votre nom, dans les conditions prévues à votre contrat.",
      },
      {
        question: "Quels terrains BEPAS met-elle à disposition ?",
        answer:
          "BEPAS dispose de concessions qu'elle aménage avant de les proposer au public. Sur nos sites, nous assurons notamment la viabilisation, le tracé des voies de circulation, le bornage, l'installation de forages, et des parcelles en 20 m × 20 m ou 15 m × 20 m. Des équipements sociaux sont prévus selon les sites (école, centre médical, place commerciale).",
      },
      {
        question:
          "BEPAS peut-elle construire sur un terrain que j'ai acheté ailleurs ?",
        answer:
          "BEPAS développe son activité de construction à crédit. Pour un terrain hors parcelles BEPAS, les conditions et possibilités sont à étudier au cas par cas avec nos conseillers. Contactez-nous aux Anciennes Galeries Présidentielles pour en discuter.",
      },
      {
        question: "Puis-je construire sur ma parcelle après l'achat ?",
        answer:
          "Oui. Dès votre acompte, vous pouvez être orienté vers votre parcelle et préparer la suite de votre projet. BEPAS propose aussi un accompagnement pour la construction à crédit (sur une période de 0 à 5 ans, selon les conditions en vigueur). Renseignez-vous auprès de nos conseillers pour les modalités.",
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
