<template>
	<v-toolbar fixed>
		<v-toolbar-title><router-link :to="{ name: 'index'}">Freeposts</router-link></v-toolbar-title>
    	<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-dialog v-model="dialog1" persistent max-width="600px">
				<template v-slot:activator ="{ on }" >
					<v-btn flat v-on="on" @click="dialog2=false">
						<!-- <font-awesome-icon :icon="['fas','user']" /> -->
						Signup
					</v-btn>
				</template>
				<v-layout row wrap>
					<v-flex xs10 sm10>
						<FormSignUp @close-dialog="dialog1=false" />
					</v-flex>
				</v-layout>
			</v-dialog>
			<v-dialog v-model="dialog2" persistent max-width="600px" height="auto">
				<template v-slot:activator ="{ on }" >
					<v-btn flat v-on="on" @click="dialog1=false">
						<!-- <font-awesome-icon :icon="['fas','user']" /> -->
						Login
					</v-btn>
				</template>
				<v-layout row wrap>
					<v-flex xs10 sm10>
						<FormLogin @close-dialog="dialog2=false" />
					</v-flex>
				</v-layout>
			</v-dialog>
		</v-toolbar-items>
  </v-toolbar>
</template>

<script>
import FormSignUp from '@/components/forms/user/Signup'
import FormLogin from '@/components/forms/user/Login'
export default {
	name: 'LayoutHeader',
	components: {
		FormSignUp,FormLogin
	},
	data() {
		return {
			dialog1: false,
			dialog2: false,
		}
	}
}
</script>

<style>

</style>
