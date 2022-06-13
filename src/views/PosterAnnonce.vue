<template>
    <section>
        <div id="container">
    
    <form ref="newPost">
        <h1>Poster une annonce</h1>
    <div>
        <label for="titre">Titre : </label>
        <input id="titre" type="text" name="titre"/>
    </div><br/>
    <div>
        <label for="Description">Description : </label>
        <input id="Description" type="text" name="Description"/>
    </div><br/>
    <div>
        
        <button type="button" @click="newPost()" value="submit">Poster</button>
    </div>
    </form>
    </div>
</section>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PosterAnnonce',
    methods: {
        async newPost () {
            const bodyformdata = new FormData(this.$refs.newPost);
            const response = await axios.post('http://localhost:3000/_newPost', bodyformdata);
            if(response.data == true) {
                this.$router.push('/Annonce')
            }
        }
    }
}
</script>
