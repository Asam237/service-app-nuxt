export const state = () => ({
  SIGNUP: [
    {
      title: 'Poster une annonce gratuite',
      subTitle:
        "Avez-vous quelque chose à vendre, à louer, un service à offrir ou une offre d'emploi? Publiez gratuitement vos annonces ou événements sur Classifieds, c'est 100% gratuit, fiable, pensé business local et très facile à utiliser! ",
      img: 'annonce.png',
    },
    {
      title: 'Créer et gérer des annonces',
      subTitle:
        'Devenez un vendeur ou un acheteur fiable. Créez et gérez vos annonces. Re-publiez une de vos anciennes annonces, etc.',
      img: 'work.png',
    },
    {
      title: 'Créer une liste de favoris.',
      subTitle:
        'Créer une liste de favoris. Enregistrer des recherches. Ne rater aucune bonne affaire!',
      img: 'favoris.png',
    },
  ],

  INPUTS: [
    {
      name: 'Nom',
    },
    {
      name: 'Email',
    },
    {
      name: 'Mot de passe',
    },
  ],
  users: [],
  username: '',
  email: '',
  fullName: '',
  password: '',
  picture: '',
})

export const getters = {
  username: (state) => state.username,
  email: (state) => state.email,
  fullName: (state) => state.fullName,
  password: (state) => state.password,
  picture: (state) => state.picture,
  users: (state) => state.users,
}
export const mutations = {
  SETUSERNAME(state, value) {
    state.username = value
  },
  SETEMAIL(state, value) {
    state.email = value
  },
  SETFULLNAME(state, value) {
    state.fullName = value
  },
  SETPASSWORD(state, value) {
    state.password = value
  },
  SETPICTURE(state, value) {
    state.picture = value
  },
  SIGNUP(state, payload) {
    state.users = [
      {
        username: payload.username,
        email: payload.email,
        fullName: payload.fullName,
        password: payload.password,
        picture: payload.picture,
      },
      ...state.users,
    ]
  },
}
