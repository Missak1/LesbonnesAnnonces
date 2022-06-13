<template>
    <section>
        <div id="container">
        
            <form>
                <h1>Bienvenue sur votre profil</h1>
            <table>
                <tr>
                    <th>Pseudo</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Numero de telephone</th>
                </tr>

                <tr>
                    <td>{{ profil.pseudo }}</td>
                    <td>{{ profil.nom }}</td>
                    <td>{{ profil.prenom }}</td>
                    <td>{{ profil.email }}</td>
                    <td>{{ profil.numTel }}</td>
                </tr>
            </table>
        

                <router-link to="/modifierprofil">Modifier son profil</router-link>
                <!-- <button type="button" @click="profilUtilisateur()">Test</button> -->
                </form>
               </div>
    </section>        
</template>


<script>
import axios from 'axios'
export default {
    name: 'TheProfil',
    data(){
        return {
            profil:[]
        }
    },
    methods: {
        async profilUtilisateur () {
            const userId = localStorage.getItem('userId');

            const response = await axios.get("http://localhost:3000/" + userId + "/_profilUtilisateur");
            console.log(response.data);
            this.profil = response.data
        }
    },
    mounted () {
        this.profilUtilisateur()
    }
}
</script>

<!-- sessionStorage.getItem("id") -->

