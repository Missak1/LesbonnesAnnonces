<template>
    <section>
        <div id="container">
    
    <form ref="formAnnonce" v-if="annonce">
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

        <input id="commentaire"  name="commentaire" type="text" />
        
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
            const annonceId = this.$route.params.id;
            const bodyformdata = new FormData(this.$refs.formAnnonce);
            const response = await axios.post("http://localhost:3000/" + annonceId + "/_annonce/edit", bodyformdata);
            if(response.data == true) {
                window.location.href = '/Annonce/details/' + annonceId;
            }
        }
    }
}
</script>
