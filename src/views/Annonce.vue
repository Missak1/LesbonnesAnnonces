<template>
    <section>
        <h1>Bienvenue sur les Annonces</h1>
        <div>
            <table>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                </tr>

                <tr v-for="annonce in listeAnnonce" :key="annonce.id">
                    <td>{{ annonce.titre }}</td>
                    <td>{{ annonce.Description }}</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TheAnnonce',
    data(){
        return {
            listeAnnonce:[]
        }
    },
    methods: {
        async annonce () {
            const bodyformdata = new FormData(this.$refs.annonce);
            const response = await axios.get('http://localhost:3000/_annonce', bodyformdata);
            console.log(response.data);
            this.listeAnnonce = response.data
        }
    },
    mounted () {
        this.annonce()
    }
}
</script>