<template>
    <section>
        <h1>Bienvenue sur votre profil</h1>
            <div>
            <table>
                <tr>
                    <th>Pseudo</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Numero de telephone</th>
                </tr>

                <tr v-for="profilUtilisateur in profil" :key="profilUtilisateur.id">
                    <td>{{ profilUtilisateur.pseudo }}</td>
                    <td>{{ profilUtilisateur.nom }}</td>
                    <td>{{ profilUtilisateur.prenom }}</td>
                    <td>{{ profilUtilisateur.email }}</td>
                    <td>{{ profilUtilisateur.numTel }}</td>
                </tr>
            </table>
        </div>
                <!-- <button type="button" value="deconnexion">Deconnexion</button>
                <button type="button" @click="profilUtilisateur()">Test</button> -->
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
            const response = await axios.get("http://localhost:3000/" + sessionStorage.getItem("id") + "/_profilUtilisateur");
            alert(response.data);
            this.profil = response.data
        }
    },
    mounted () {
        this.profilUtilisateur()
    }
}
</script>