<template>
    <section>
        <div id="container">
    
    <form ref="newPost" v-if="annonce">
        <h1>Détails d'une annonce</h1>
        <div>
            Titre : {{ annonce.titre }}
        </div>
        <div>
            Description : {{ annonce.description }}
        </div>
        <div>
            Commentaire : {{ annonce.commentaire }}
        </div>

        <input id="poster" type="text" name="poster"/>
        <button type="button" @click="editCommentaire()" value="submit">Poster le commentaire</button>
        
        <button type="button" @click="editCommentaire()" value="submit">Modifier le commentaire</button>
    </form>
    </div>
</section>
</template>


<script>
import axios from 'axios'
export default {
    name: 'DetailsAnnonce',
    data(){
        return {
            annonce: null
        }
    },
    async created() {
        const annonceId = this.$route.params.id;

         const response = await axios.get("http://localhost:3000/" + annonceId + "/_annonce");

         this.annonce = response.data
    },
    methods: {
        async editCommentaire () {
            const bodyformdata = new FormData(this.$refs.newPost);
            const response = await axios.post('http://localhost:3000/_newPost', bodyformdata);
            if(response.data == true) {
                this.$router.push('/Annonce')
            }
        }
    }
}
</script>
