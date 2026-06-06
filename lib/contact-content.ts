export const contactPage = {
  hero: {
    title: "Contact",
    image: {
      src: "/heroAccueil10.jpg",
      alt: "BEPAS — contact et accompagnement",
    },
    breadcrumb: [
      { label: "Accueil", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  introImage: {
    src: "/ctaAccueilFamille.jpg",
    alt: "Conseillère BEPAS au téléphone",
  },
  serviceCard: {
    eyebrow: "Service client BEPAS",
    text:
      "Nous vous répondrons dans les plus brefs délais aux appels reçus du lundi au samedi, de 8h00 à 17h00.",
  },
  formSection: {
    title:
      "Veuillez remplir le formulaire ci-dessous, nous vous contacterons au plus vite",
    lead:
      "Indiquez-nous vos coordonnées et l'objet de votre demande. Notre équipe reviendra vers vous dans les meilleurs délais.",
    privacyNote:
      "En soumettant ce formulaire, vous acceptez d'être recontacté(e) par BEPAS pour le suivi de votre demande.",
    submitLabel: "Soumettre maintenant",
  },
} as const
