<template>
  <section>
    <h1>Connexion</h1>
    <form ref="connect">
      <div>
        <label for="pseudo">Pseudo : </label>
          <input id="pseudo" type="text" name="pseudo"/>
      </div><br/>
      <div>
        <label for="password">Mot de passe : </label>
          <input id="password" type="password" name="password"/>
      </div><br/>
      <div>
        
        <button type="button" @click="connect()" value="submit">Connexion</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheConnexion',
  methods: {
    async connect () {
      const bodyformdata = new FormData(this.$refs.connect);
      const response = await axios.post('http://localhost:3000/_connect', bodyformdata);
      if(response.data != false) {
        this.$router.push('/Profil')
      }
    }
  }
}
</script>