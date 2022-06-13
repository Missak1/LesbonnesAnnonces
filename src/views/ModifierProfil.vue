<template>
  <section  id="container">
    <form ref="profil" v-if="profil">
      <h1>Modifier profil</h1>
      <div>
        <label for="nom">Nom : </label>
          <input id="nom" type="text" name="nom" :value="profil.nom"/>
      </div><br/>
      <div>
        <label for="prenom">Prenom : </label>
          <input id="prenom" type="text" name="prenom"  :value="profil.prenom"/>
      </div><br/>
      <div>
        <label for="password">Mot de passe : </label>
          <input id="password" type="password" name="password"  :value="profil.password"/>
      </div><br/>
      <div>
        <label for="email">Email : </label>
          <input id="email" type="text" name="email"  :value="profil.email"/>
      </div><br/>
      <div>
        <label for="numTel">Numero de telephone : </label>
          <input id="numTel" type="tel" name="numTel"  :value="profil.numTel"/>
      </div><br/>
      <div>
        <button type="button" @click="modifierProfil()" value="submit">Modifier</button>
      </div>
    </form>
    </section>
</template>


<script>
import axios from 'axios'
export default {
  name: 'ModifierProfil',
  data(){
    return {
        profil:null
    }
  },
  async created(){
      const userId = localStorage.getItem('userId');

      const responseProfil = await axios.get("http://localhost:3000/" + userId + "/_profilUtilisateur");
      console.log(responseProfil.data);
      this.profil = responseProfil.data;
  },
  methods: {
    async modifierProfil () {
      const userId = localStorage.getItem('userId');

      const bodyformdata = new FormData(this.$refs.profil);
      const response = await axios.post("http://localhost:3000/" + userId + "/_profilUtilisateur", bodyformdata);
      if(response.data != false) {
        this.$router.push('/profil')
      }
    }
  }
}
</script>
