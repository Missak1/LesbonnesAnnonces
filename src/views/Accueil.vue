<template>
  <section>
  <h1>Bienvenue sur LesBonnesAnnonces</h1>
  <div>
    <p>
      Vous aussi pouvez poster votre propre annonce
    </p>
    <button type="button" @click="connexion">Poster votre anoonce</button>
  </div>
  </section>
</template>

<script>

export default {
  name: 'TheAccueil',
  methods:{
   connexion(){
   this.$router.push('/connexion'); 
      }
  },
  components: {
    
  }
}
</script>
