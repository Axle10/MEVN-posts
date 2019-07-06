<template>
<v-content>
	<div><LayoutHeader /></div>
		<div :class="smallDevice ? 'mob-content' : 'content'">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 class="content-post">
					<v-card v-for="post in posts" :key="post.title" >
						<v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
						<v-card-title primary-title>
							<h2 class="headline mb-0">{{ post.title}}</h2>
							<v-spacer></v-spacer>
							<span>Created At 12.01.2019</span>
						</v-card-title>
						<v-card-text>{{post.content}}</v-card-text>
						<v-card-actions>
							<v-layout row align-center spacer>
								<v-flex xs1 sm1 md1>
									<v-avatar size="35px">
										<img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
									</v-avatar>
								</v-flex>
								<v-flex xs3 sm7 md7>
									<strong v-html="post.createdBy" class="content-post-user"></strong>
									<div>Student</div>
								</v-flex>
								<v-spacer></v-spacer>
								<router-link :to="{name: 'posts', params: {post : post}}"><v-btn text-xs-center>View</v-btn></router-link>
							</v-layout>

						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</div>
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
			smallDevice: false,
			posts: []
		}
	},
	created() {
		if(this.$vuetify.breakpoint.smAndDown)
		{
			this.smallDevice = true
		}
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
<style scoped lang="scss" scoped>
.mob-content
{
	margin-top: 20%;
	padding: 3%;
}
.content
{
	margin-top: 6%;
	padding: 3%;
}
.content-post
{
	.content-post-user
	{
		font-size: 20px;
	}

}
</style>
