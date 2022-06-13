import Vue from 'vue'
import VueRouter from 'vue-router'
import TheAccueil from '../views/Accueil.vue'
import TheConnexion from '../views/Connexion.vue'
import TheInscription from '../views/Inscription.vue'
import TheProfil from '../views/Profil.vue'
import PosterAnnonce from '../views/PosterAnnonce.vue'
import TheAnnonce from '../views/Annonce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: TheAccueil
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: TheConnexion
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: TheInscription
  },
  {
    path: '/profil',
    name: 'profil',
    component: TheProfil
  },
  {
    path: '/posterannonce',
    name: 'poster',
    component: PosterAnnonce
  },
  {
    path: '/Annonce',
    name: 'annonce',
    component: TheAnnonce
  }
]

const router = new VueRouter({
  routes
})

export default router
