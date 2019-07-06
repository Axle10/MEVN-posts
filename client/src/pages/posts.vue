<template>
<v-content>
	<div><LayoutHeader /></div>
	<div>{{post.content}}</div>
	<div><LayoutFooter /></div>
</v-content>
</template>

<script>
import axios from 'axios'
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutFooter from '@/layouts/LayoutFooter'
export default {
	name: 'posts',
	components: {
		LayoutHeader,LayoutFooter
	},
	props: {
		post: {
			type: Object
		}
	},
	created() {
		console.log(this.post)
	}
}
</script>

<style>

</style>
