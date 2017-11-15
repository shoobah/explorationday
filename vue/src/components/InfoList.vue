<template>
  <div class="hello">
    <h2 v-if="!loading">Loaded {{ allPeople.length }} items</h2>
    <h2 v-if="loading">LOADING!</h2>
    <ul v-if="!loading">
        <template v-for="item in allPeople">
            <li v-bind:key="item.id">{{item.first_name}} {{item.last_name}}</li>
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
            allPeople: [],
            loading: true
        };
    },
    mounted() {
        const vm = this;
        console.log('Infolist mounted');
        this.loading = true;
        axios.get('http://localhost:3000/getall').then(response => {
            this.loading = false;
            const step = 10;
            for (let i = 0; i <= response.data.length - step; i += step) {
                this.allPeople = response.data.slice(i, i + step);
                console.log(this.allPeople);
                vm.$forceUpdate();
            }
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
