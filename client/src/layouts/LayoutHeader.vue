<template>
	<v-toolbar>
		<v-toolbar-title to="/">Freeposts</v-toolbar-title>
    	<v-spacer></v-spacer>

		<v-toolbar-items v-for="menu in menus" :key="menu.title">
			<v-btn flat>
				<!-- <font-awesome-icon :icon="['fas','user']" /> -->
				{{ menu.title }}
			</v-btn>
		</v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
	name: 'LayoutHeader',
	data() {
		return {
			menus: [
				{
					icon: 'fa-user',
					title: 'Signup'
				},
				{
					title: 'login'
				}
			]
		}
	}
}
</script>

<style>

</style>
