<template>
  <div>
    <ul>
      <li v-for="post in posts" v-bind:key="post.id">{{ post }}</li>
    </ul>
  </div>
</template>

<script>
import PostService from '../PostService'
export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  // This function runs automatically when the component is created
  async created () {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  }
}

/* eslint-disable */

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
