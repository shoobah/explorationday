<template>
  <div class="hello">
    <h2 v-if="!loading">Loaded {{ allPeople.data.length }} items</h2>
    <h2 v-if="loading">LOADING!</h2>
    <ul v-if="!loading">
        <template v-for="item in allPeople.data">
            <li v-bind:key="item.id">{{item.first_name}}</li>
        </template>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HelloWorld',
    props: ['loadedData'],
    data() {
        return {
            msg: 'Vue FTW',
            stuff: this.loadedData,
            allPeople: {},
            loading: true
        };
    },
    mounted() {
        console.log('Mounted!')
        this.loading = true;
        axios.get('http://localhost:3000/getall').then(response => {
            console.log('data fetched!', response);
            this.allPeople = response;
            this.loading.false;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
