<template>
  <div class="hello">
    <h1 v-if="msg">home page</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: null
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/api/user').then(res => {
        this.msg = res
        console.log(res)
      })
    }
  }
  // beforeRouteEnter (to, from ,next) {
  //   var msg = null
  //   axios.get('/api/user').then(res => {
  //     msg = res
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
