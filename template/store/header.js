export const state = () => ({
  headerIcons: [
    {
      icon: require('../static/location.png'),
      name: 'Pres de chez vous',
      link: '#',
    },
    {
      icon: require('../static/account.png'),
      name: 'Identifiez-vous',
      link: '/signin',
    },
    {
      icon: require('../static/adduser.png'),
      name: "S'inscrire",
      link: '/account',
    },
    {
      icon: require('../static/help.png'),
      name: 'Aide',
      link: '#',
    },
  ],
  headerLinks: [
    {
      name: 'Immobilier',
      link: '#hello',
    },
    {
      name: 'Auto-Moto',
      link: '#one',
    },
    {
      name: 'Emploi',
      link: '#two',
    },
    {
      name: 'Animaux',
      link: '#three',
    },
    {
      name: 'Services',
      link: '#four',
    },
    {
      name: 'Affaire',
      link: '#five',
    },
    {
      name: 'Vacances',
      link: '#six',
    },
  ],
  imgHome: {
    icon: require('../static/accueil.png'),
    name: 'home',
  },
})
