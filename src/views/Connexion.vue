<template>
  <section> 
    <div id="container">
    <form ref="connect">
      <h1>Connexion</h1>
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
    </div>
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
        localStorage.setItem('userId', response.data);
        this.$router.push('/Profil')
      }
    }
  }
}
</script>

<style>
#container{
    width:500px;
    margin:0 auto;
    margin-top:10%;
}

form {
    width:100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    
}


input[type=text], input[type=password], input[type=tel] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button[type=button] {
    
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 98%;
}
button[type=button]:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
}
</style>