<template>
    <section>
      <div id="container">
    
    <form ref="inscription">
      <h1>Inscription</h1>
      <div>
        <label for="pseudo">Pseudo : </label>
          <input id="pseudo" type="text" name="pseudo"/>
      </div><br/>
      <div>
        <label for="nom">Nom : </label>
          <input id="nom" type="text" name="nom"/>
      </div><br/>
      <div>
        <label for="prenom">Prenom : </label>
          <input id="prenom" type="text" name="prenom"/>
      </div><br/>
      <div>
        <label for="password">Mot de passe : </label>
          <input id="password" type="password" name="password"/>
      </div><br/>
      <div>
        <label for="email">Email : </label>
          <input id="email" type="text" name="email"/>
      </div><br/>
      <div>
        <label for="numTel">Numero de telephone : </label>
          <input id="numTel" type="num" name="numTel"/>
      </div><br/>
      <div>
        <button type="button" @click="inscription()" value="submit">S'inscrire</button>
      </div>
    </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheInscription',
  methods: {
    async inscription () {
      const bodyformdata = new FormData(this.$refs.inscription);
      const response = await axios.post('http://localhost:3000/_inscription', bodyformdata);
      if(response.data != false) {
        this.$router.push('/connexion')
      }
    }
  }
}
</script>