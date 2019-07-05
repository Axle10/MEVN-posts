<template>
<v-content>
	<div><LayoutHeader /></div>
	<v-layout row wrap>
		<v-flex xs12 sm12 md4>
			<v-card v-for="post in posts" :key="post.title">
				<v-card-title>
					{{ post.title}}
				</v-card-title>
				<v-card-text>{{post.content}}</v-card-text>
				<v-card-actions>{{ post.createdBy }}</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
	<div><LayoutFooter /></div>
</v-content>
</template>

<script>
import axios from 'axios'
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutFooter from '@/layouts/LayoutFooter'
export default {
  	name: 'index',
	components: {
		LayoutHeader,LayoutFooter
	},
	data () {
		return {
			posts: []
		}
	},
	created() {
		this.initaialize()
	},
	methods: {
		async initaialize() {
			const response= await axios.get('http://localhost:5000/api/posts')
			for(var i in response.data)
			{
				this.posts.push({"title" : response.data[i].title, "content": response.data[i].content,"createdBy": response.data[i].createdBy})
			}

		}
	}
}
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
